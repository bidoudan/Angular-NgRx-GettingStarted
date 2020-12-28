import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from './auth.service';
import { getMaskUserName, UserState } from './state/user.reducer';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';

  maskUserName: boolean;

  constructor(private store: Store<UserState>,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.store.select(getMaskUserName).subscribe(
      
      maskUserName => {console.log(maskUserName);this.maskUserName = maskUserName}
    );
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(): void {
    // this.maskUserName = !this.maskUserName;
    this.store.dispatch(
      { type: '[User] Toggle User Name'}
    );
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    }
  }
}
