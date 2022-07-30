import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { authUserDTO } from 'src/app/dtoModels/authUserModel';


@Component({
  selector:'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private _AS:AuthService;
  constructor(public AS:AuthService) { 
    this._AS = AS;
  }

  ngOnInit(): void {
  }
  
public signupForm = new FormGroup({
  firstName: new FormControl('',[Validators.required]),
  lastName: new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  username: new FormControl('',[Validators.required]),
  location: new FormControl('',[Validators.required]),
  contact: new FormControl(''),
  password: new FormControl('',[Validators.required]),
  confirmPassword:new FormControl('',[Validators.required]),
});

get firstName(){
  return this.signupForm.get('Username');
}
get lastName(){
  return this.signupForm.get('lastname');
}
get username(){
  return this.signupForm.get('username');
}
get email(){
  return this.signupForm.get('email');
}
get password(){
  return this.signupForm.get('Password');
}
get location(){
  return this.signupForm.get('location');

}
get contact(){
  return this.signupForm.get('contact');

}
get confirmPassword(){
  return this.signupForm.get('ConfirmPassword');
}

genUserCred(res:any){
  const data= this.signupForm.value
  const encPass = this._AS.encPass(data.Password);
  const userCred = {
    UserId:res.body.id,
    UserName:data.username,
    Email:data.email,
    Pass:encPass,
    Location:data.location,
    IsActive:true
  
  }
  console.log(userCred)
  
  return userCred;
  }
  
handleSignup(){
  const data = this.signupForm.value;
  const user = {
    FirstName:data.firstName,
    LastName:data.lastName,
    Contact:data.contact,
    Location:data.location,
   IsActive:true
  
  }

  console.log(user)
  this.AS.regUser(user).subscribe({
    next: data=>{
      console.log(data);

      const userCreds = this.genUserCred(data);
      console.log(userCreds)
      this.handleUserCred(userCreds);
    }
      })
    }

handleUserCred(Userscreds:any){
  this.AS.regUserCred(Userscreds).subscribe({
    next: data=>{
      console.log(data);
      alert('Signup Successfll.');
    }
    })


}
}
