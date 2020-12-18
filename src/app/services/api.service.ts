import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) {}

  get(
    endpoint: string,
    params?: any,
    reqOpts = {
      params: new HttpParams()
    }
  ): Observable<any> {
    if (params) {
      reqOpts.params = new HttpParams();

      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get(endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.post(endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(endpoint, body, reqOpts);
  }
}
