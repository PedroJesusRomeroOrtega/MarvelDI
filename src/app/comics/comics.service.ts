import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HandleError, HttpErrorHandler, CredentialsService } from '../core/services';
import { environment } from 'src/environments/environment';
import { ComicsServiceModule } from './comics.service.module';
import { Comic } from '../core/models';

@Injectable({
  providedIn: ComicsServiceModule,
})
export class ComicsService {
  private handleError: HandleError;
  private credentials: string;

  constructor(
    private http: HttpClient,
    private credendialsService: CredentialsService,
    httpErrorHandler: HttpErrorHandler,
  ) {
    this.handleError = httpErrorHandler.createHandleError('AccountService');
    this.credentials = credendialsService.getCredentials();
  }

  getComics(): Observable<Comic[]> {
    const url = `${environment.baseAPIUrl}v1/public/comics?${
      this.credentials
    }&hasDigitalIssue=true&limit=10`;
    return this.http.get<any>(url).pipe(
      map((cdb) => <Comic[]>cdb.data.results),
      catchError(this.handleError('getComics', [])),
    );
  }
}
