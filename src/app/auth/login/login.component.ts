import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {Role} from '../../model/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: {errorTitle: '', errorDesc: ''};
  loginError: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authService.logout();
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.authService.login(this.username.value, this.password.value).subscribe((data) => {

      console.log(data);
      console.log(data.role);
      console.log(this.authService.redirectUrl);

       //if (this.authService.isLoggedIn && data.role == Role.Superadmin) {

        if ( (this.authService.isLoggedIn && data.role == Role.Admin) || (this.authService.isLoggedIn && data.role == Role.Superadmin) ) {
          //const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/employee';
          this.router.navigate([redirect]);
        } 
        else if(this.authService.isLoggedIn && data.role == Role.User){
            this.router.navigate(['/']);
        }
        else {
          this.loginError = 'Username or password is incorrect.';
        }
      },
      error => this.error = error
    );
  }
}

