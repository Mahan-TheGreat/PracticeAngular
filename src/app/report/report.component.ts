import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent, RefreshCellsParams, RowNode, Grid, GridOptionsWrapper, GridOptions,  } from 'ag-grid-community';
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
  private gridOption:GridOptions = {}
  private _api:GridApi = new GridApi()
  constructor(SS:SalesServiceService, public PS: PrintServiceService) { 
    this.Ss = SS
  }
  rowData:any[]=[]

  onGridReady(params:GridReadyEvent){
    this.gridApi = params.api;
    this.getData();
    params.api.setRowData(this.rowData);
    // params.api.sizeColumnsToFit();
  }
  
  ngOnInit(): void {
  }

  //gets sales data from table and stores it
  getData(){
    this.Ss.getSalesReport().subscribe(
      data=>{
         this.rowData=data;
      });
  }  
  
  print(){
    console.log(this.gridApi);
    // this.gridApi.setDomLayout('print');
    // this.gridOptions.api.setDomLayout('print');
       this.PS.onBtPrint(this.gridApi);
  };

  exportToExcel(){
    this.gridApi.exportDataAsCsv();
  }
    //Column Definition for ag grid
  colDefs:ColDef[] =
   [
      {headerName:"ItemName", field:"itemName"},
      {headerName:"Quantity", field:"quantity"},
      {headerName:"TotalPrice", field:"totalPrice"}

    ];

       // Default Column Definition
  defaultColDef: ColDef = 
  {
    sortable: true,
    filter: true,
  };
}
