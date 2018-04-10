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

  constructor(
    private http: HttpClient
  ) {
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MjM0OTAzNDR9.Z3-xQuOs3vO1w5F3533fKuDRpLIhIQRCtdvEKzmj9VI');
  }

  public getAllProblems(): Observable<any> {
    return this.http.get(API_URL + '/problema', {responseType: 'json'});
  }

  public getAllSolutions(): Observable<any> {
    return this.http.get(API_URL + '/solucao', {responseType: 'json'});
  }

}
