import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of, tap, throwError } from 'rxjs';
import { User } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){
  }



  register(user: User): Observable<{token: string}>{

    return this.http.post<{token: string}>('https://reqres.in/api/register', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token)
          }
        )
      )
  }

  logout(): void {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
  }

  getToken(): string | null{
    return localStorage.getItem('auth-token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

}
