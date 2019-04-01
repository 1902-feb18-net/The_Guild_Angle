import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RanksComponent } from './ranks/ranks.component';
import { RankrequirementsComponent } from './rankrequirements/rankrequirements.component';
import { RequestsComponent } from './requests/requests.component';
import { AdventurerpartyComponent } from './adventurerparty/adventurerparty.component';
import { RequestinggroupComponent } from './requestinggroup/requestinggroup.component';
import { ProgressComponent } from './progress/progress.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'users', component: UsersComponent},
    { path: 'users/:id', component: UserEditComponent},
    { path: 'ranks', component: RanksComponent},
    // { path: 'ranks/:id', component: RanksEditComponent},
    { path: 'rankrequirements', component: RankrequirementsComponent},
    // { path: 'rankrequirements/:id', component: RankrequirementsEditComponent},
    { path: 'requests', component: RequestsComponent},
    { path: 'adventurerparty', component: AdventurerpartyComponent},
    { path: 'requestinggroup', component: RequestinggroupComponent},
    // { path: 'requests/:id', component: RequestsComponent},
    { path: 'progresses', component: ProgressComponent},
];

