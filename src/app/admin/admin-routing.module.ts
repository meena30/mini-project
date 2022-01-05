import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AuthGuard } from '../auth/auth.guard';
import {Role} from '../model/role';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    children: [
      {
      path: '',
      children: [
        //{ path: 'blogs', component: ManageBlogsComponent },
        //{ path: 'blogs/create', component: BlogFormComponent },
        //{ path: 'blogs/edit/:id', component: BlogFormComponent },
        //{ path: 'categories', component: ManageCategoriesComponent },
        //{ path: 'pages', component: ManagePagesComponent },
        { path: '', component: AdminDashboardComponent }
      ],
    }
  ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
