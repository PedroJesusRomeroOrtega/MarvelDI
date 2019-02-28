import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private timeStamp = +new Date();
  private hash: string;
  private credentials: string;

  constructor() {
    this.generateCredentials();
  }

  getCredentials(): string {
    return this.credentials;
  }

  getHash(): string {
    return this.hash;
  }

  private generateCredentials(): void {
    this.hash = String(
      Md5.hashStr(`${this.timeStamp}${environment.privateApiKey}${environment.publicApiKey}`),
    );
    this.credentials = `ts=${this.timeStamp}&apikey=${environment.publicApiKey}&hash=${this.hash}`;
  }
}
