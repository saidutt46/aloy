import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../_modules/material/material.module';
import { ValidateService } from '../_services/validate.service';
import { AuthService } from '../_services/auth.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ParticlesModule } from 'angular-particle';
import { AuthGuardService } from '../_guards/auth-guard.service';
import { SpotifyHomeComponent } from './components/spotify-home/spotify-home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    SpotifyHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FlashMessagesModule.forRoot(),
    ParticlesModule
  ],
  providers: [
    ValidateService,
    FlashMessagesService,
    JwtHelperService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
