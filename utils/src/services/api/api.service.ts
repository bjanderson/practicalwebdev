import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { httpOptions } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Makes an HTTP DELETE call to the given url
   */
  delete(url: string, options: any = httpOptions): Observable<any> {
    return this.http.delete(url, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  /**
   * Makes an HTTP GET call to the given url
   */
  get(url: string, params?: any, options: any = httpOptions): Observable<any> {
    const requestOptions = Object.assign({}, options);
    const httpParams = new HttpParams();

    if (params != null) {
      for (const key of Object.keys(params)) {
        httpParams.set(key, params[key]);
      }
    }

    requestOptions.params = httpParams;

    return this.http.get(url, requestOptions).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  /**
   * Makes an HTTP PATCH call to the given url
   */
  patch(url: string, body: any, options: any = httpOptions): Observable<any> {
    return this.http.patch(url, body, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  /**
   * Makes an HTTP POST call to the given url
   */
  post(url: string, body: any, options: any = httpOptions): Observable<any> {
    return this.http.post(url, body, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  /**
   * Makes an HTTP PUT call to the given url
   */
  put(url: string, body: any, options: any = httpOptions): Observable<any> {
    return this.http.put(url, body, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  /**
   * Handles any error responses from the server.
   */
  mapError(error: any): Observable<any> {
    return throwError(this.mapResponse(error));
  }

  /**
   * Handles any non-error responses from the server, and returns the body of the response.
   */
  mapResponse(response: any): any {
    let res;
    try {
      res = response.json();
    } catch (e) {
      res = response;
    }
    return res;
  }
}
