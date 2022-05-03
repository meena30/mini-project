import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpRoutingModule } from './erp-routing.module';
import { ErpComponent } from './erp/erp.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [ErpComponent, ProfileComponent],
  imports: [
    CommonModule,
    ErpRoutingModule
  ]
})
export class ErpModule { }
