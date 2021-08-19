import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {UserOptions  } from  '../../../interfaces/user-options';

import {  UserData} from '../../../providers/user-data';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' ,memorabledata:''};
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    this.router.navigateByUrl('/auth/home');
    return;

    if (form.valid) {
      this.userData.login(this.login.username);

    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}

