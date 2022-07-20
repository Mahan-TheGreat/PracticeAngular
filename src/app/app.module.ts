import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryService } from './services/inventory.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BtnCellRenderer } from './dashboard/button.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { ReportComponent } from './report/report.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BtnCellRenderer,
    PopupModalComponent,
    SalesDashboardComponent,
    ReportComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
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

