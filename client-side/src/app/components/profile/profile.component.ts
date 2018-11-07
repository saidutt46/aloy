import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { NOTIFICATION_SERV_TOKEN, INotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  name: string;
  username: string;
  email: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    @Inject(NOTIFICATION_SERV_TOKEN) private notifier: INotificationService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.dialog.closeAll();
    this.notifier.pop('Logged Out');
  }

  isLoggedIn() {
    const a = localStorage.id_token;
    return (a === undefined) ? true : false;
  }
}
