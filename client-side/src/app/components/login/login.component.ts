import { Component, OnInit, Inject } from '@angular/core';
import { UserReg } from '../../../_modles/user-registration';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ValidateService } from '../../../_services/validate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { INotificationService, NOTIFICATION_SERV_TOKEN } from '../../../_services/notification.service';


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
    @Inject(NOTIFICATION_SERV_TOKEN) private notifier: INotificationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': [this.user.username, [Validators.required]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]]
    });
  }

  onLoginSubmit() {
    this.authService.authenticateUser(this.loginForm.value)
      .subscribe(data => {
         if (data.success) {
            this.authService.storeUserData(data.token, data.user);
            this.notifier.pop('Logged In Successfully');
            this.router.navigate(['dashboard']);
         } else {
           this.notifier.pop('Unsuccessful!');
           this.router.navigate(['login']);
         }
      });
  }

}
