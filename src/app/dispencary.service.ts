import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DispencaryService {

 dispensarylist = [
    'ABC dispensary',
    'XYZ dispensary',
    'MNO dispensary',
    'EFG dispensary'

  ]
  constructor() { 


  }

  get getDispensarylist():string[]{
     return this.dispensarylist;
  }

  set setDispensaryList(disp:string){
    this.dispensarylist.push(disp)
    console.log(this.dispensarylist)
  }
}
