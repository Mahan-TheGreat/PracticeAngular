import {Component} from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ColumnApi, GridApi, ICellRendererParams } from "ag-grid-community";


@Component({
   selector: 'btn-AgGrid',
   template: `
         
             <button (click)="buttonClicked($event)" class="btn btn-sm btn-primary btnGrid" data-action-type='sell'>Sell</button>
             <button (click)="buttonClicked($event)" class="btn btn-sm btn-info btnGrid" data-action-type='view'>View</button>
             <button (click)="buttonClicked($event)" class="btn btn-sm btn-warning btnGrid" data-action-type='edit'>Edit</button>
             <button (click)="buttonClicked($event)" class="btn btn-sm btn-danger btnGrid" data-action-type='delete'>Delete</button>

         `,
   styleUrls: ['./dashboard.component.css'] 
   
})

export class BtnCellRenderer implements ICellRendererAngularComp {
   public cellValue: string = "";
   private params: any;
   componentparent: any;
   
   private gridApi: GridApi = new GridApi
   private columnApi: ColumnApi = new ColumnApi
   
   // gets called once before the renderer is used
   agInit(params: ICellRendererParams): void {
       this.cellValue = this.getValueToDisplay(params);
       this.params = params;
       this.componentparent = this.params.context.componentParent;
      }

   // gets called whenever the cell refreshes
   refresh(params: ICellRendererParams): boolean {
       // set value into cell again
       console.log('refresh')
        this.params.api.refreshCells([])
       this.cellValue = this.getValueToDisplay(params);
       return true;
   }

   buttonClicked($event: any) {
       const type = $event.target.getAttribute('data-action-type')
       const info = this.params.data
       const output = {
         eventType: type,
         data:info
       }
       this.componentparent.handleGridAction(output)
   }

   getValueToDisplay(params: ICellRendererParams) {
       return params.valueFormatted ? params.valueFormatted : params.value;
   }
}