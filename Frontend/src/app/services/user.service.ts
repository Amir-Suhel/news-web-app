import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInRequest } from '../models/sign-in-request';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { Observable } from 'rxjs';
import { SIGNIN_URL, SIGNUP_URL } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private apiGatewayUrlSignUp =  'http://localhost:9090/api/v1';
  //private apiGatewayUrlSignIn = 'http://localhost:9090';
  // baseUrl1 = 'http://localhost:8081/api/v1';
  // baseUrl2 = 'http://localhost:8082'
  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );
  constructor(private http: HttpClient) { }

  public signUp(user: User) {
    return this.http.post(`${SIGNUP_URL}/users`, user);
    // return this.http.post('https://dic8035w0c.execute-api.us-east-1.amazonaws.com/dev/user', user);
    
  }

  public signIn(signInRequest: SignInRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${SIGNIN_URL}/login`, signInRequest, { headers: this.requestHeader });
    //return this.http.post<AuthResponse>('https://dic8035w0c.execute-api.us-east-1.amazonaws.com/dev/auth', signInRequest);
  }
}
