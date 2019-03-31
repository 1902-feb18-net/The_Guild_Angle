import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Login } from '../_models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.login).subscribe(next => {
      console.log('Logged in succesfully');
    }, error => {
      console.log('Failed to login');
    }, () => {
      this.router.navigate(['/users']);
    });
  }

  loggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}

logout() {
  localStorage.removeItem('token');
  console.log('logged out');
  this.router.navigate(['/login']);
}
}
