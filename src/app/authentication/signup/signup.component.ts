import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  
public signupForm = new FormGroup({
  Username: new FormControl('',[Validators.required]),
  Password: new FormControl('',[Validators.required]),
  ConfirmPassword:new FormControl('',[Validators.required])
});

get Username(){
  return this.signupForm.get('Username');
}
get Password(){
  return this.signupForm.get('Password');
}
get ConfirmPassword(){
  return this.signupForm.get('ConfirmPassword');
}

handleSignup(){
  console.log(this.signupForm.value);
}

}
