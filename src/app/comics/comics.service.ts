import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HandleError, HttpErrorHandler } from '../core/services';
import { environment } from 'src/environments/environment';
import { ComicsServiceModule } from './comics.service.module';

@Injectable({
  providedIn: ComicsServiceModule,
})
export class ComicsService {
  private handleError: HandleError;
  private timeStamp = +new Date();
  private hash: string;
  private credentials: string;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AccountService');
    this.generateCredentials();
  }

  getComics(): Observable<any> {
    const url = `${environment.baseAPIUrl}v1/public/comics${this.credentials}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError('getComics', [])));
  }

  private generateCredentials(): void {
    this.hash = String(Md5.hashStr(`${this.timeStamp}${environment.privateApiKey}${environment.publicApiKey}`));
    this.credentials = `?ts=${this.timeStamp}&apikey=${environment.publicApiKey}&hash=${this.hash}`;
  }
}
