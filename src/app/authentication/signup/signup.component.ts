import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public AS:AuthService) { 
    
  }

  ngOnInit(): void {
  }
  
public signupForm = new FormGroup({
  Username: new FormControl('',[Validators.required]),
  Password: new FormControl('',[Validators.required]),
  ConfirmPassword:new FormControl('',[Validators.required]),
});

genUser(pass:any){
// const User = this.signupForm.value();
// const encPass = this.AS.encPass(pass,15);
// console.log(User)
console.log(pass)
}
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
  const data = this.signupForm.value;
  this.genUser(data);
}

}
