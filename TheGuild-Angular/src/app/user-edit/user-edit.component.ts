import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;

  isDisabled: boolean;
  disabletextArea() {
    this.isDisabled = !this.isDisabled;
  }
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadUser();
    this.isDisabled = true;
  }

  loadUser() {
    const lintStringLiteralFix = 'id';
    this.userService.getUser(+this.route.snapshot.params[lintStringLiteralFix]).subscribe((user: User) => {
      this.user = user;
    }, error => {
      console.log(error);
    });
    }

    updateUser() {
      const lintStringLiteralFix = 'id';
      this.userService.updateUser(+this.route.snapshot.params[lintStringLiteralFix], this.user).subscribe(next => {
        this.editForm.reset(this.user);
        this.router.navigate(['/users'])
      }, error => {
        console.log(error);
      });
    }
}
