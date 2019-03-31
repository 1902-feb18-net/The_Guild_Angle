import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RanksComponent } from './ranks/ranks.component';
import { RequestsComponent } from './requests/requests.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'users', component: UsersComponent},
    { path: 'users/:id', component: UserEditComponent},
    { path: 'ranks', component: RanksComponent},
    // { path: 'ranks/:id', component: UserEditComponent},
    { path: 'requests', component: RequestsComponent},
    // { path: 'requests/:id', component: UserEditComponent},
];

