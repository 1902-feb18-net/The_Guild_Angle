import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private api: UserService, private router: Router) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    sessionStorage.removeItem('account');
    console.log('logged out');
    this.router.navigate(['/login']);
  }
}
