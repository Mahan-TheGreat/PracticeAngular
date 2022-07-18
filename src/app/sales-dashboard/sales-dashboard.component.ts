import { Component, OnInit } from '@angular/core';
import { GridOptions, ColDef, GridApi, ColumnApi, GridReadyEvent, RefreshCellsParams, RowNode } from 'ag-grid-community';
import { IItem } from '../interfaces/iitem';
import { InventoryService } from '../services/inventory.service';

import { SalesServiceService } from '../services/sales-service.service';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css']
})
export class SalesDashboardComponent implements OnInit {
  private Ss: SalesServiceService
  private Is: InventoryService
  constructor(SS:SalesServiceService, IS:InventoryService) { 
    this.Ss = SS
    this.Is = IS
  }
  SalesList:any[]=[]
  rowData:IItem[]=[]

  onGridReady(params:GridReadyEvent){
    this.mapData()
    params.api.setRowData(this.rowData);
  }
  
  ngOnInit(): void {
  }

  //gets sales data from table and stores it
 private mapData(){
  this.rowData = [];
    this.Ss.getSales().subscribe(
      data=>{
        this.rowData =  [...data]
      });
  }  

    //Column Definition for ag grid
  colDefs:ColDef[] =
   [
      {headerName:"Id", field:"id"},
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
