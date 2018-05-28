import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { error } from 'util';
import { MatSnackBar } from '@angular/material';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  private auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1Mjc1Mzg1NDh9.LYaNNjjHqPnWn6WZoGP_bsxlORkbzu0569M-fYlbsjU';

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar
  ) {
    this.http.get(API_URL);
    this.loadProblems();
  }
  private _markersBS = new BehaviorSubject(undefined);

  private requestProblems(params?): Observable<any> {
    return this.http.get('/problema', { 
      headers: {
        "Content-Type": "application/json",
        "Authorization": this.auth_token
      },
      params: params
    });
  }

  public loadProblems(params?, showMessage = false) {
    this.requestProblems(params).subscribe(
      data => {
        this._markersBS.next(data);
        if(showMessage) {
          this.snackBar.open("Filtro aplicado", "Fechar", {
            duration: 5000,
          });
        }
      },
      error => console.log(error)
    )
  }

  public getProblems()  {
    return this._markersBS.asObservable();
  }
}
