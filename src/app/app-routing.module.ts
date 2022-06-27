import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ReportComponent } from './report/report.component';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';

const routes: Routes = [
  {path:'', component:AgGridComponent},
  {path:'Dashboard', component:AgGridComponent},
  {path:'Sales', component:SalesDashboardComponent},
  {path:'Report', component:ReportComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
