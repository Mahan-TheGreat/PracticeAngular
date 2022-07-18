import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }
   
  flag:boolean=false;
  ngOnInit(): void {
  }

  handleChange($event:any){
  console.log($event.target.getAttribute('data-Btntype')) 
  this.flag= !this.flag;
 }

}
