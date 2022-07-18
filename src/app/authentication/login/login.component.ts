import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public loginForm = new FormGroup({
    Username: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required]),
  });

  get Username(){
    return this.loginForm.get('Username');
  }
  get Password(){
    return this.loginForm.get('Password');
  }


  handleLogin(){
    console.log(this.loginForm.value)
  }
}
