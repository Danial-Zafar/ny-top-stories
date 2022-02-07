import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(protected http: HttpClient) {}

  get(url: string, headerOptions?: HttpHeaders) {
    return this.http.get(url, {
      headers: new HttpHeaders({ ...headerOptions })
    });
  }

  post(url: string, body = {}, headerOptions?: HttpParams) {
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        ...headerOptions
      })
    });
  }
}
