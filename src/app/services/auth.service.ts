import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
// import { authUserDTO } from '../dtoModels/authUserModel';
import * as CryptoJS from 'crypto-js';
import { authUserDTO } from '../dtoModels/authUserModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private passHash = '';
  private _user:authUserDTO;
  private url:string = 'https://localhost:44335/api/Users'
  private url2:string = 'https://localhost:44335/api/Userscreds'

  constructor(private http: HttpClient, public user:authUserDTO) {

    this._user = user;
   }

     //Register
     regUser(item:any):Observable<any>{
      return   this.http.post<any>(this.url, item,{observe:'response'})
    }

    regUserCred(item:any):Observable<any>{
      return this.http.post<any>(this.url2,item,{observe:'response'})
    }


    encPass(passText:string){
      // const user1 = this.user
      const pass =CryptoJS.AES.encrypt(passText,"Password").toString();
     return pass;
    }
}

