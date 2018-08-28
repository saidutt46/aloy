import { Component, OnInit } from '@angular/core';
import { UserReg } from '../../../_modles/user-registration';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ValidateService } from '../../../_services/validate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserReg = new UserReg();
  loginForm: FormGroup;
  hide: true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': [this.user.username, [Validators.required]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]]
    });
  }

  onLoginSubmit() {
    this.authService.authenticateUser(this.loginForm.value)
      .subscribe(data => {
         if (data.success) {
            this.authService.storeUserData(data.token, data.user);
            this.flashMessage.show('Enjoy your Time - Logged In', {
              cssClass: 'alert-success', timeout: 5000
            });
            this.router.navigate(['dashboard']);
         } else {
           this.flashMessage.show(data.msg, {
             cssClass: 'alert-danger', timeout: 5000
           });
           this.router.navigate(['login']);
         }
      });
  }

}
