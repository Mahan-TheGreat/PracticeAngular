import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryService } from './inventory.service';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { BtnCellRenderer } from './ag-grid/button.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { ReportComponent } from './report/report.component';
import { PrintServiceService } from './print-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    BtnCellRenderer,
    PopupModalComponent,
    SalesDashboardComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([BtnCellRenderer])
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

