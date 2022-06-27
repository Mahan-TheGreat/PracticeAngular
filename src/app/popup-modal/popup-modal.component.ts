import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
  
@Component({
  selector: "popup-modal-app",
  templateUrl: "./popup-modal.component.html",
})
export class PopupModalComponent implements OnInit {
 
  defaultQuantity=1
  constructor() {

  }

  //handles Display of Modal
  @Input() display:string="";
  
  //handles display logic for dispatch or view
  @Input() viewPopup:boolean=false;

  @Input() transactionPopup:boolean=false;

  @Input() addItemPopup:boolean=false;

  @Input() salePopup:boolean=false;



  //dispencary list
  @Input() dispencaryList:any[]=[];

  //handle Data to display for View  from ag-grid
  @Input() popUpData:any[]=[];

  @Input() transactionData:any[]=[];

   //handle Closing of the Modal
  @Output() closePop: EventEmitter<string> = new EventEmitter<string>();
  @Output() doDispatch: EventEmitter<any> = new EventEmitter<any>();
  
  ngOnInit() {
  }
  
  
  closePopup(){
    this.viewPopup=false
    this.salePopup=false
    this.transactionPopup=false
    this.addItemPopup=false
    this.closePop.emit('none')
  }

  handleSell(data:any){
     this.doDispatch.emit(data)
  }
  
  
  

}