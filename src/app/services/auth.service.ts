import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as bcrypt from 'bcrypt';
import { authUserDTO } from '../dtoModels/authUserModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private passHash = '';

  constructor(private http: HttpClient, private user:authUserDTO) {

    user = new authUserDTO();
   }

     //Register
     regUser(url:any,item:any):Observable<any>{
      return   this.http.post<any>(url, item,{observe:'response'})
    }

    callBackEncrypt(err:any,hash:any){

    }

    encPass(passText:string,saltCount:number){
      const user1 = this.user
      bcrypt.hash(passText,saltCount, 
         (err,hash)=>{
          console.log(hash)
          this.passHash = hash
        });
     return this.passHash;
    }
}

