import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { User } from '../model/user';
import { LoginResponse } from '../model/LoginResponse';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  signupURL: string = 'http://localhost:5000/signup';
  loginURL: string = 'http://localhost:5000/login';
  constructor(private http: HttpClient) {}

  signup(user: User) {
    return this.http.post(this.signupURL, user);
  }
  login(loginData: any) {
    return this.http.post<LoginResponse>(this.loginURL, loginData).pipe(
      map((res) => {
        console.log('res' + res);
        let userObj: User;
        let token: string;
        if (res.hasOwnProperty('user') && res.hasOwnProperty('token')) {
          userObj = res['user'];
          token = res['token'];
        }
        console.log('from auth service' + res['user']);
        return { user: userObj, token: token };
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }
}
