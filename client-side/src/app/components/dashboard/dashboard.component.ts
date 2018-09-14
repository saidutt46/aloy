import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  query: string;
  data: any;
  items: any;

  constructor(private authSerice: AuthService) { }

  ngOnInit() {
  }

}
