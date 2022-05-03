import { CommonModule, DatePipe } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { BsDatepickerModule } from 'ngx-bootstrap';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BasiconeComponent } from './basicone/basicone.component';
import { BasictwoComponent } from './basictwo/basictwo.component';
import { ReactformComponent } from './reactform/reactform.component';

import { ListEditComponent } from './list-edit/list-edit.component';
//import { MaterialModule } from './material/material.module';

//import { MatSliderModule } from '@angular/material/slider';

import { ErpModule } from './erp/erp.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { httpInterceptorProviders } from './http-interceptors/index';
import { HeaderComponent } from './header/header.component';

/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';*/

/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';*/



import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SidenavComponent } from './sidenav/sidenav.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HighlightPipe } from './highlight.pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; // for search





@NgModule({
  declarations: [
    AppComponent,
    BasiconeComponent, //for two way binding we have to declar the component name
    BasictwoComponent,
    ReactformComponent,
    ListEditComponent,
    HeaderComponent,
    SidenavComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErpModule,
    AdminModule,
    AuthModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    Ng2SearchPipeModule,
    AppRoutingModule
    /*BrowserAnimationsModule,
    BsDatepickerModule.forRoot()*/
    //MaterialModule,
    //MatSliderModule,
    
    
  ],
  providers: [httpInterceptorProviders,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
