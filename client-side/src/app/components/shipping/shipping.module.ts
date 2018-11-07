import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent, LoginComponent, RegisterComponent,
DashboardComponent, NavbarComponent, ProfileComponent } from '../index';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { UiuxModule } from '../../uiux/uiux.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiuxModule
  ],
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    ProfileComponent
  ],
  exports: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    ProfileComponent
  ]

})
export class ShippingModule { }
