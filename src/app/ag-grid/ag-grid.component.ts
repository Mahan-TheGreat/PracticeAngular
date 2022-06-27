import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BtnCellRenderer } from './button.component';
import { GridOptions, ColDef, GridApi, ColumnApi, GridReadyEvent, RefreshCellsParams, RowNode } from 'ag-grid-community';
import { invModel } from '../iItems.model';
import { InventoryService } from '../inventory.service';
import { DispencaryService } from '../dispencary.service';
import { IItem } from '../interfaces/iitem';
import { SalesServiceService } from '../sales-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})

export class AgGridComponent implements OnInit {

  public Is: InventoryService
  public SS: SalesServiceService
  
  public inventoryItems: any[] = []
  public dispencaryList: string[] = []
  
  componentparent: any;
  showPopup:string="none"
  viewPopup:boolean=false
  transactionPopup:boolean=false
  addItemPopup:boolean=false
  salePopup: boolean=false
  popUpData: any[] = []
  context: any
  gridApi: any;
  
  constructor(IS:InventoryService, SS: SalesServiceService ) { 
    this.Is = IS
    this.SS = SS
    this.context = {
      componentParent: this
     }
  }


  
   onGridReady(params:GridReadyEvent){
    params.api.setRowData(this.rowData);
  }

  ngOnInit(): void {
    this.mapData()
  }
 
  private mapData():void{
    this.Is.getInventory().subscribe(
      data=>{
        this.rowData = [...data]
      });
  }
  
  closePopup(){
    this.showPopup="none"
    this.viewPopup=false
    this.addItemPopup=false
    this.transactionPopup=false
    this.salePopup=false
    this.popUpData=[]
  }

 handleDispatch($event:any){

 this.mapData()
 const itemId = this.rowData.find(d=>d.itemName===$event.dispatchItem)?.id
 if(itemId==null || itemId==undefined){
  alert('Error')
 }else{
  const saleItem = {
    itemId: itemId,
    quantity:parseInt($event.dispatchQuantity),
    totalPrice:$event.dispatchQuantity*$event.dispatchPrice
   }
   var msg = ''
   this.SS.addSales(saleItem).subscribe({
    next: data => {
                    console.log(data)
                    if(data.body.status==200)
                    {
                      msg = 'Sold  successFully'
                      this.salePopup=false
                      this.showPopup='none'
                      alert(msg)
                      this.mapData()
                    }
                  },
   error: error=>{
                  msg=error.message
                  alert(msg)
                  } 
 
 })

 }
}

//handle add logic   
  handleAddItem(data: any){
   const item = {
    itemName : data.itemName,
    itemPrice: data.itemPrice,
    itemDetails: data.itemDescription,
    quantity: data.itemQuantity,
    isActive: true
   }
   let res = this.Is.addInventory(item)
   if(res=='Data added successFully'){
    alert('Success')
   }
   else{
    alert('Error')
   }
  //  this.mapData()
  }

  handleNavigation($event:any){
    const data = $event.eventType
    if(data){
      switch(data){
        case 'transaction':{
          this.transactionPopup=true
          this.showPopup = 'block'    
console.log(this.transactionPopup)
          break;
        }
        case 'addItem':{
          this.addItemPopup=true
          this.showPopup = 'block'    

          break;
        }
        default: {
          alert('Error..')
        }
      }
    }
  }

   handleGridAction($event:any){
    if($event){
      
      console.log($event.eventType)
      switch($event.eventType){
        case 'sell':{
          if($event.data.quantity===0){
            alert("Error!! Item is out of stock.")
            break
          }
          this.salePopup=true;
          this.showPopup="block"
          this.popUpData=[]
          this.popUpData.push($event.data)
          break;
        }
        case 'view':{
          this.viewPopup = true 
          this.showPopup = 'block'    
          this.popUpData = []
          this.popUpData.push($event.data)


          break;
        }
        case 'addItem':{
          this.addItemPopup=true
          this.showPopup = 'block'    

          break;
        }
        default :{
          window.alert("Something went wrong!! Please Try again.")
        }
      }
    }
  }

  addSales(item:any){
    const res = this.SS.addSales(item)
    console.log(res)
  }

  //Column Definition for ag grid
  colDefs:ColDef[] = [
    {headerName:"ItemName", field:"itemName"},
    {headerName:"ItemPrice", field:"itemPrice"},
    {headerName:"ItemDetails", field:"itemDetails"},
    {headerName:"Quantity", field:"quantity"},

    {headerName:"Dispatch",
    field:"",
    cellRenderer: BtnCellRenderer,
    minWidth:450}
  ]

   // Default Column Definition
   public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  }
  //Row Data for ag grid
  rowData:IItem[]= [  ]

  


}
