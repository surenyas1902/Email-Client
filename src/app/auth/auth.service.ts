import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SingupCredentials{
  username: String;
  password: String;
  passwordConfirmation:String;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootURL = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject(false);
  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootURL}/auth/username`,
      {
        username
      }
    );
  }

  signUp(credentials: SingupCredentials) {
    return this.http.post<SignupResponse>(`${this.rootURL}/auth/signup`,
      credentials
    ).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    )
  }

  checkAuth() {
    return this.http.get(`${this.rootURL}/auth/signedin`)
    .pipe(
      tap((response) => {
        console.log(response)
      })
    )
  }
}
