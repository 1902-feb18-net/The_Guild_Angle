import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
// tslint:disable-next-line: no-string-literal
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error => {
      console.log(error);
    });
    }

    updateUser() {
// tslint:disable-next-line: no-string-literal
      this.userService.updateUser(+this.route.snapshot.params['id'], this.user).subscribe(next => {
        this.editForm.reset(this.user);
      }, error => {
        console.log(error);
      });
    }
}
