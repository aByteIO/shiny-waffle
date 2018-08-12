import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  getKeys(): Observable<any> {
    return this.httpClient.get<any>(this.basePath);
  }

  private get basePath(): string {
    return environment.api.basePath + '/values';
  }
}
