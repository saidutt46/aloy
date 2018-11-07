import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../_modules/material/material.module';
import { ValidateService } from '../_services/validate.service';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ParticlesModule } from 'angular-particle';
import { AuthGuardService } from '../_guards/auth-guard.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NOTIFICATION_SERV_TOKEN, SnackBarService } from '../_services/notification.service';
import { ShippingModule } from './components/shipping/shipping.module';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { ProfileComponent } from './components';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    ShippingModule,
  ],
  entryComponents: [ProfileComponent],
  providers: [
    ValidateService,
    JwtHelperService,
    AuthGuardService,
    { provide: NOTIFICATION_SERV_TOKEN, useClass: SnackBarService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
