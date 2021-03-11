import { AsyncValidator, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {

  }

  validate = (formControl: FormControl) => {
    const {value} = formControl;
    return this.http.post<any>("https://api.angular-email.com/auth/username", {
      username: value
    });
  }
}
