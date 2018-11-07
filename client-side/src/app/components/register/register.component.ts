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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 user: UserReg = new UserReg();
 registerForm: FormGroup;
 hide = true;
 success: any;

  constructor(
    private valdiateService: ValidateService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    @Inject(NOTIFICATION_SERV_TOKEN) private notifier: INotificationService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [Validators.required]],
      'username': [this.user.username, [Validators.required]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]]
    });
  }

  onRegisterSubmit() {
    this.authService.registerUser(this.registerForm.value).subscribe(data => {
      if (data) {
        this.notifier.pop('Registered Successfully!', undefined);
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
       }
    });
  }

}
