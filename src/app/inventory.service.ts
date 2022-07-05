import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IItem } from './interfaces/iitem';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private url = 'https://localhost:7108/api/Inventories'
   constructor(private http: HttpClient){
   }
  
  private inventoryStock:IItem[] = []

  get getInventoryStock(){
    return this.inventoryStock;
  }

  
   getInventory():Observable<IItem[]>{
    return this.http.get<IItem[]>(this.url)
   }  

   //adding inventory
   addInventory(item:any){
    var msg = ''
    
    this.http.post<any>(this.url, item).subscribe({
      next: data => {
       if(data.id!=null &&data.id!=undefined){
        msg = 'Data added successFully'
        alert(msg)

        }
      },
      error: error=>{
      msg=error.message
      alert(msg)
      
    }
  })
    return msg
}


  //after sales
  subtractInventory(data: any){
    this.http.put<any>(this.url,data)
  }


//fetch from database
    setInventoryStock(){
     this.getInventory().subscribe(
      data=>{
        this.inventoryStock = [...data]
      });

     }

     deleteInventory(item:any){
      this.http.put(this.url,item)
     }

}
