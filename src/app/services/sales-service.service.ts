import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IItem } from '../interfaces/iitem';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {
  private url = 'https://localhost:44335/api/TxnSales'
  private SalesList:any[] = []
  constructor(private http: HttpClient) {
   }
  
   returnSalesList(){
    return this.SalesList
   }

   getSales():Observable<IItem[]>{
    return this.http.get<IItem[]>(this.url)
   }  

   //adding sales item
    addSales(item:any):Observable<any>{

    return   this.http.post<any>(this.url, item,{observe:'response'})
  }
//fetch from database
setSales(){
  let data1:IItem[]=[]
   this.getSales().subscribe(
    data=>{
      this.SalesList = [...data]
    });

   }

  getSalesReport():Observable<any[]>{
    const url = 'https://localhost:44335/api/TxnSales/GenReport';
    return this.http.get<any[]>(url)

  }



}

