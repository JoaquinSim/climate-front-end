import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ClimateModel, UpdateClimateDto } from '../models/climate.model';

@Injectable({
  providedIn: 'root',
})
export class ClimateService {
  URL: string = 'http://127.0.0.1:3000/api/v1/climate';
  PDF: string = 'http://127.0.0.1:3000/api/v1/pdf';
  constructor(private readonly httpClient: HttpClient) {}

  create(payload: ClimateModel): Observable<ClimateModel> {
    const url = `${this.URL}`;

    return this.httpClient.post<any>(url, payload).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  findClimates() {
    return this.httpClient.get<ServerResponse>(this.URL).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  findOne(id: string): Observable<ClimateModel> {
    const url = `${this.URL}/${id}`;

    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  update(id: string, payload: UpdateClimateDto): Observable<ClimateModel> {
    const url = `${this.URL}/${id}`;

    return this.httpClient.put<ServerResponse>(url, payload).pipe(
      map((response) => {
        return response.data;
      })
    );
  }
  remove(id: string): Observable<ClimateModel> {
    const url = `${this.URL}/${id}`;

    return this.httpClient.delete<ServerResponse>(url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  pdf(city: string, file:string) {
    const url = `${this.PDF}/${city}`;

    this.httpClient.get<BlobPart>(url, {responseType: 'blob' as 'json'})
      .subscribe(response => {
        const filePath = URL.createObjectURL(new Blob([response], {type: 'application/pdf'}));
        //const filePath = URL.createObjectURL(new Blob([response]));
        const downloadLink = document.createElement('a');
        downloadLink.href = filePath;
        console.log(filePath)
        downloadLink.setAttribute('download', file);
        document.body.appendChild(downloadLink,);
        downloadLink.click();
      });
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
