import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });
  constructor(private loginService: LoginService) {}

  ngOnInit() {}
  onSubmit() {
    console.log(this.loginForm.value);
    this.loginService.validateCredential(this.loginForm.value);
  }
}
