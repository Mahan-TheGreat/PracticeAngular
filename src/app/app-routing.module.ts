import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'Dashboard', component:DashboardComponent},
  {path:'Sales', component:SalesDashboardComponent},
  {path:'Report', component:ReportComponent},
  {path:'Auth', component:AuthenticationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
