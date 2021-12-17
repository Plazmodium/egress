import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IHttpRequestOptions } from '../interfaces/request-options';

@Injectable({
  providedIn: 'root',
})
export class NetworkCallService {
  constructor(private http: HttpClient) {}

  public get<Res>(url: string, options?: IHttpRequestOptions) {
    return this.http
      .get<Res>(url, options)
      .pipe(catchError((e) => throwError(() => new Error(e))));
  }

  public post<Req, Res>(
    url: string,
    payload: Req,
    options?: IHttpRequestOptions
  ) {
    return this.http
      .post<Res>(url, payload, options)
      .pipe(catchError((e) => throwError(() => new Error(e))));
  }

  public put<Req, Res>(
    url: string,
    payload: Req,
    options?: IHttpRequestOptions
  ) {
    return this.http
      .put<Res>(url, payload, options)
      .pipe(catchError((e) => throwError(() => new Error(e))));
  }

  public patch<Req, Res>(
    url: string,
    payload: Req,
    options?: IHttpRequestOptions
  ) {
    return this.http
      .patch<Res>(url, payload, options)
      .pipe(catchError((e) => throwError(() => new Error(e))));
  }

  public delete<Res>(url: string) {
    return this.http
      .delete<Res>(url)
      .pipe(catchError((e) => throwError(() => new Error(e))));
  }
}
