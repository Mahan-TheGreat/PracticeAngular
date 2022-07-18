import { Injectable } from '@angular/core';
import { Grid, GridApi } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class PrintServiceService {
  // private gridApi: GridApi= new GridApi
  constructor( ) { 
  }

  onBtPrint(gridApi: GridApi) {
    this.setPrinterFriendly(gridApi)
    // window.print()
    // const api = gridApi;
    // this.setPrinterFriendly(api);
    // print();
    this.setNormal(gridApi);

  }
    
 setPrinterFriendly(api: GridApi) {
  const eGridDiv = document.querySelector<HTMLElement>('#myGrid')! as any;
  eGridDiv.style.height = '';
  api.setDomLayout('print');
}
 setNormal(api: GridApi) {
  const eGridDiv = document.querySelector<HTMLElement>('#myGrid')! as any;
  eGridDiv.style.width = '700px';
  eGridDiv.style.height = '200px';
  api.setDomLayout();
}
}
