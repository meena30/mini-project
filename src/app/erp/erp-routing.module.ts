import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErpComponent } from './erp/erp.component';
import { ProfileComponent } from './profile/profile.component';


//const routes: Routes = [];

/*const routes: Routes = [
  {
    path: 'erp',
    component: ErpComponent,
    children: [
      {
      path: '',
      children: [
        { path: 'myprofile', component: ProfileComponent },
        { path: '', component: ProfileComponent }
      ],
    }
  ]
  }
];*/


const routes: Routes = [
  {
    path: 'erp',
    component: ErpComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpRoutingModule { }
