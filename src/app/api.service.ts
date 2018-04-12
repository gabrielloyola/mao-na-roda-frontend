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
  private auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1MjM1ODAwNzl9.j3fL2CV7Cwted0MVOBgn5zTUPVAhY9JoiEjBUaMfeZU';
  private _headers = new HttpHeaders;
  
  constructor(private http: HttpClient) {
    this._headers.set('Authorization', this.auth_token);
  }

  public getAllProblems(): Observable<any> {
    console.log(this._headers);
    return this.http.get(API_URL + '/problema', { headers: this._headers });
  }
  
  public getAllSolutions(): Observable<any> {
    const headers = this._headers.append('Authorization', this.auth_token);
    return this.http.get(API_URL + '/solucao');
  }

}
