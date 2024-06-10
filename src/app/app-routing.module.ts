import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { LoginComponent } from './login/login.component';
import { WorkSummaryComponent } from './work-summary/work-summary.component';


const routes: Routes = [
  
  {path:"workSummary/:id",component:WorkSummaryComponent},
  {path:'customer/add',component:CustomerCreateComponent},
  {path:"customer/:id",component:CustomerDetailComponent},
  {path:'customers',component:CustomerlistComponent},
  {path:"",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
