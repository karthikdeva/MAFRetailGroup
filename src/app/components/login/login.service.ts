import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventEmitter} from 'events';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class LoginService extends EventEmitter {
  constructor(private httpClient: HttpClient) {
    super();
  }

  validateCredential(cred): Observable < any > {
    console.log(cred);
    return this
      .httpClient
      .post('/login', cred);
  }
}
