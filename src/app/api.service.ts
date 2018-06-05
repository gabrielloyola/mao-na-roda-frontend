import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { error } from 'util';
import { MatSnackBar } from '@angular/material';
import { SolvedFilterPipe } from './solved-filter.pipe';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

const API_URL = environment.apiUrl;
const months = [
  '', 'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN', 'JUL',
  'AGO', 'SET', 'OUT',
  'NOV', 'DEZ'
];

@Injectable()
export class ApiService {
  private auth_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1MjgxNzUxODh9.xfWBimcKtl9aPOqkofVPV1FYHkxxrMo9Gg-1N66JPjE';
  private returnUrl;
  navigationSubscription;

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar,
    public filter: SolvedFilterPipe,
    public router: Router
  ) {
    this.http.get(API_URL);
    this.loadProblems(null, '', false);
    this.loadFrequencies(null, false);
  }
  private _markersBS = new BehaviorSubject(undefined);
  private _frequenciesBS = new BehaviorSubject(undefined);
  private _frequenciesLabelsBS = new BehaviorSubject(undefined);

  private requestProblems(params?): Observable<any> {
    return this.http.get('/problema', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.auth_token
      },
      params: params
    });
  }

  private requestProblemFrequencies(params?): Observable<any> {
    return this.http.get('/problema/frequencia', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.auth_token
      },
      params: params
    });
  }

  private requestSolutionFrequencies(params?): Observable<any> {
    return this.http.get('/solucao/frequencia', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.auth_token
      },
      params: params
    });
  }

  public loadProblems(params?, slice = '', showMessage = true) {
    this.requestProblems(params).subscribe(
      data => {
        this._markersBS.next(this.filter.transform(data, slice));
        if (showMessage) {
          this.showFilterMessage();
        }
      },
      err => console.log(err)
    );
  }

  public loadFrequencies(params?, showMessage = true) {
    let frequencies = [];
    let labels = [];
    forkJoin(
      this.requestProblemFrequencies(params),
      this.requestSolutionFrequencies(params)
    ).subscribe(([pf, sf]) => {
        const problemFreq = [];
        const solutionFreq = [];
        const currentLabels = [];
        for (const freq of pf) {
          problemFreq.push(freq.valor);
          currentLabels.push(months[freq.mes] + '/' + freq.ano);
        }
        for (const freq of sf) {
          solutionFreq.push(freq.valor);
        }
        frequencies = [{data: problemFreq, label: 'Problemas'}, {data: solutionFreq, label: 'Soluções'}];
        labels = currentLabels;
        this._frequenciesBS.next(frequencies);
        this._frequenciesLabelsBS.next(labels);
        if (showMessage) {
          this.navigationSubscription = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
              this.router.navigate(['/chart?refresh=1']);
            }
          });
          this.showFilterMessage();
        }
      },
      err => console.log(err)
    );
  }

  private showFilterMessage() {
    this.snackBar.open('Filtro aplicado', 'Fechar', {
      duration: 5000,
    });
  }

  public getProblems() {
    return this._markersBS.asObservable();
  }

  public getFrequencies() {
    return this._frequenciesBS.asObservable();
  }

  public getFrequenciesLabels() {
    return this._frequenciesLabelsBS.asObservable();
  }
}
