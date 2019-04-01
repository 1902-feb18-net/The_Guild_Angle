import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Login } from '../_models/login';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private api: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.api.login(this.login).then(() => {
      this.router.navigate(['/users']);
    },
    error => {
      console.log(error);
    });
  }

  loggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}


}
