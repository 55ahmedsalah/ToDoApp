import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient, private router: Router) {}

  signin(username: string, password: string) {
    const data = {
      // tslint:disable-next-line: object-literal-shorthand
      username: username,
      // tslint:disable-next-line: object-literal-shorthand
      password: password
    };
    this.http.post<{message: string, token: string}>('http://localhost:3000/api/signin', data)
    .subscribe((signinData) => {
      localStorage.setItem('token', signinData.token);
      this.router.navigate(['/main']);
    });
  }
}
