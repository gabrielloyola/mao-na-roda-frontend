import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const API_URL = environment.apiUrl;


@Injectable()
export class ApiService {
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  public auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MjM0OTAzNDR9.Z3-xQuOs3vO1w5F3533fKuDRpLIhIQRCtdvEKzmj9VI';

  constructor(private http: HttpClient) { }

  public getAllProblems(): Observable<any> {;
    return this.http.get(API_URL + '/problema', {
      headers : {
        "Authorization":this.auth_token
      } 
    });
  }
  
  public getAllSolutions(): Observable<any> {
    const headers = this._headers.append('Authorization', this.auth_token);
    return this.http.get(API_URL + '/solucao');
  }

}
