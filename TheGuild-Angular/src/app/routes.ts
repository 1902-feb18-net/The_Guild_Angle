import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'users', component: UsersComponent},
    { path: 'users/:id', component: UserEditComponent},
];

