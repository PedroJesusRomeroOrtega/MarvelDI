import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Character } from '../core/models';
import { HandleError, CredentialsService, HttpErrorHandler } from '../core/services';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
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

  getCharacters(nameStartWith: string = null): Observable<Character[]> {
    let url = `${environment.baseAPIUrl}v1/public/characters?${this.credentials}&limit=10`;

    if (nameStartWith){
      url = url + `&nameStartsWith=${nameStartWith}`
    }

    return this.http.get<any>(url).pipe(
      map((cdb) => <Character[]>cdb.data.results),
      catchError(this.handleError('getCharacters', [])),
    );
  }
}
