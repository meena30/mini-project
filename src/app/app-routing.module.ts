import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactformComponent } from './reactform/reactform.component';
import { BasiconeComponent } from './basicone/basicone.component';
import { BasictwoComponent } from './basictwo/basictwo.component';
import { LoginComponent } from './login/login.component';
import { ListEditComponent } from './list-edit/list-edit.component';

const routes: Routes = [
  /*{ path: '', redirectTo:'basictwo', pathMatch:'full'},*/
  { path: 'login', component: LoginComponent },
  { path: '', component: BasiconeComponent },
  { path:'basictwo', component: BasictwoComponent },
  { path: 'reactform', component: ReactformComponent },
  { path: 'edit/:id', component: ListEditComponent },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
