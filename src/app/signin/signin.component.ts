import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninService } from '../services/signin-service/signin.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private signinService: SigninService
  ) {
    // Change
    // if (localStorage.getItem('token') !== null) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    // Get token from backend
    this.signinService.signin(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          // Success
          // Save token and navigate
          this.router.navigate(['/main']);
        },
        error => {
          this.loading = false;
          // Remove this, its just for testing
          this.router.navigate(['/main']);
        });
  }
}
