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

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar,
    public filter: SolvedFilterPipe
  ) {
    this.http.get(API_URL);
    this.loadProblems(null, '', false);
    this.loadProblemFrequencies(null, false);
    this.loadSolutionFrequencies(null, false);
  }
  private _markersBS = new BehaviorSubject(undefined);
  private _problemFrequenciesBS = new BehaviorSubject(undefined);
  private _solutionFrequenciesBS = new BehaviorSubject(undefined);
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

  public loadProblemFrequencies(params?, showMessage = true) {
    this.requestProblemFrequencies(params).subscribe(
      data => {
        const frequencies = [];
        const labels = [];
        for (const freq of data) {
          frequencies.push(freq.valor);
          labels.push(months[freq.mes] + '/' + freq.ano);
        }
        this._problemFrequenciesBS.next(frequencies);
        this._frequenciesLabelsBS.next(labels);
        if (showMessage) {
          this.showFilterMessage();
        }
      },
      err => console.log(err)
    );
  }

  public loadSolutionFrequencies(params?, showMessage = true) {
    this.requestSolutionFrequencies(params).subscribe(
      data => {
        const frequencies = [];
        for (const freq of data) {
          frequencies.push(freq.valor);
        }
        this._solutionFrequenciesBS.next(frequencies);
        if (showMessage) {
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

  public getProblemFrequencies() {
    return this._problemFrequenciesBS.asObservable();
  }

  public getSolutionFrequencies() {
    return this._solutionFrequenciesBS.asObservable();
  }

  public getFrequenciesLabels() {
    return this._frequenciesLabelsBS.asObservable();
  }
}
