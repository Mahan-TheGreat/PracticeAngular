import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IItem } from './interfaces/iitem';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private url = 'https://localhost:44335/api/Inventories'
   constructor(private http: HttpClient){
    this.setInventoryStock()
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

    deleteInventory(id:number){
      console.log(this.inventoryStock)
      let item = this.inventoryStock.find(x=>x.id==id)
      console.log(item)
        return this.http.delete(`${this.url}/${id}`,{responseType: 'text'})

      
    }

}
