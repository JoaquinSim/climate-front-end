import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AuthHttpService {
  API_URL: string = `http://127.0.0.1:3000/api/v1/auth`;

  constructor(private readonly httpClient: HttpClient) {
  }

  login(credentials: any): Observable<ServerResponse> {
    const url = `${this.API_URL}/login`;
    return this.httpClient.post<ServerResponse>(url, credentials)
      .pipe(
        map(response => {
        console.log(response)
          return response;
        })
      );
  }
}

export interface ServerResponse {
    data: any;
    error?: string;
    message: string;
    statusCode: number;
    title: string;
    version?: string;
  }