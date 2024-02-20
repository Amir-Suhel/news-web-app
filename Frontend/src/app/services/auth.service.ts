import { Injectable } from '@angular/core';
import { CurrentUser } from '../models/currentUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor() { }

  public getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  public setCurrentUser(value: CurrentUser) {
    localStorage.setItem('currentUser', JSON.stringify(value));
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('token', jwtToken);
  }

  public isLoggedIn() {
    return this.getToken() != null;
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.clear();
    return true;
  }

}
