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
  private auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1MjY1OTU4OTN9.w1GxfQ2KM5ulLfeAeuVqb7lCBzbsLn3-_8kGTNvlkew';
  
  constructor(private http: HttpClient) {
    this.http.get(API_URL)
  }

  public getAllProblems(): Observable<any> {
    return this.http.get('/problema', { 
      headers: {
        "Content-Type": "application/json",
        "Authorization": this.auth_token
      }
    });
  }
  
  public getAllSolutions(): Observable<any> {
    return this.http.get(API_URL + '/solucao', { 
      headers: {
        "Content-Type": "application/json",
        "Authorization": this.auth_token
      }
    });
  }

}
