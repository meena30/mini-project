import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


@NgModule({
  declarations: [EmployeeComponent, EmployeeaddComponent, EmployeelistComponent, EmployeeEditComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
