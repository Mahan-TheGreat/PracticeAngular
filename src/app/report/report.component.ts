import { Component, OnInit } from '@angular/core';
import { GridOptions, ColDef, GridApi, ColumnApi, GridReadyEvent, RefreshCellsParams, RowNode, Grid, GridOptionsWrapper } from 'ag-grid-community';
import * as printJS from 'print-js';
import { PrintServiceService } from '../print-service.service';

import { SalesServiceService } from '../sales-service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  private Ss: SalesServiceService
  private gridApi: GridApi = new GridApi()
  private _api:GridApi = new GridApi()
  gridOptions: any;
  constructor(SS:SalesServiceService, public PS: PrintServiceService) { 
    this.Ss = SS
  }
  SalesList:any[]=[]
  rowData:any[]=[]

  onGridReady(params:GridReadyEvent){
    this.gridApi = params.api
    params.api.setRowData(this.rowData);

  }
  
  ngOnInit(): void {
     this.getData()
  }

  //gets sales data from table and stores it
  getData(){
    this.Ss.getSalesReport().subscribe(
      data=>{
         this.rowData=data
      });
  }  
  
  print(){
    this.gridOptions.api.setDomLayout('print')
       // this.PS.onBtPrint(this.gridApi)
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
