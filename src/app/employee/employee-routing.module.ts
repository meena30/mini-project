import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  { 
    path: '', component: EmployeeComponent,
    children: [
      { path: '', component: EmployeelistComponent},
      { path: 'add', component: EmployeeaddComponent },
      { path: 'edit', component: EmployeeEditComponent }
    ]  
  }
];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
