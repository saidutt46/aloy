import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(map(result => result.matches));

  constructor(
    public authService: AuthService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    // tslint:disable-next-line:triple-equals
    if (localStorage.id_token == undefined) {
      return true;
    } else {
      return false;
    }
  }

  openUserProfile() {
    this.dialog.open(ProfileComponent, {
      width: '300px',
      autoFocus: false,
      position: {
        right: '20px', top: '50px'
      }
    });
  }

}
