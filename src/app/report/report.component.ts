import { Component, OnInit } from '@angular/core';
import { GridOptions, ColDef, GridApi, ColumnApi, GridReadyEvent, RefreshCellsParams, RowNode } from 'ag-grid-community';
import { IItem } from '../interfaces/iitem';

import { SalesServiceService } from '../sales-service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  private Ss: SalesServiceService
  constructor(SS:SalesServiceService) { 
    this.Ss = SS
  }
  SalesList:any[]=[]
  SalesReportList:any[]=[]
  rowData:any[]=[]

  onGridReady(params:GridReadyEvent){
    params.api.setRowData(this.rowData);
  }
  
  ngOnInit(): void {
     this.getData()
  }

  //gets sales data from table and stores it
  getData(){
    this.Ss.getSalesReport().subscribe(
      data=>{
        data.forEach(item=>{
          this.transformData(item)
        })
        this.rowData=this.SalesReportList


      });
  }  

  transformData(data:any[]){
    const x = data
    var quantity:number=0;
    var totalPrice:number=0;
    var itemName:string='';
    
    x.map(y=>{
      itemName=y.itemName
      quantity += y.quantity
      totalPrice += y.totalPrice
    })
    const item = {
      itemName: itemName,
      quantity: quantity,
      totalPrice:totalPrice
    }
    this.SalesReportList.push(item)

        // data.forEach(x=>{
        //   console.log(x.splice(1))
        //   let y = x.splice(1)
        //   y.forEach(y=>{
        //     console.log(y);
        //   })
        // })

  }

    //Column Definition for ag grid
  colDefs:ColDef[] =
   [
      {headerName:"ItemName", field:"itemName"},
      {headerName:"Quantity", field:"quantity"},
      {headerName:"TotalPrice", field:"totalPrice"},

    ]

       // Default Column Definition
  defaultColDef: ColDef = 
  {
    sortable: true,
    filter: true,
  }
}
