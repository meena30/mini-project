import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BasiconeComponent } from './basicone/basicone.component';
import { BasictwoComponent } from './basictwo/basictwo.component';
import { ReactformComponent } from './reactform/reactform.component';

import { ListEditComponent } from './list-edit/list-edit.component';
//import { MaterialModule } from './material/material.module';

//import { MatSliderModule } from '@angular/material/slider';

import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { httpInterceptorProviders } from './http-interceptors/index';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    BasiconeComponent, //for two way binding we have to declar the component name
    BasictwoComponent,
    ReactformComponent,
    ListEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    AppRoutingModule
    //MaterialModule,
    //MatSliderModule,
    //BrowserAnimationsModule
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
