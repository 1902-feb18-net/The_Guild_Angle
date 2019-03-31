import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatMenuModule, MatInputModule , MatButtonModule, MatFormFieldModule, MatTableModule , MatDialogModule,
    MatIconModule, MatToolbarModule , MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { AuthService } from './_services/auth.service';
import { UsersComponent } from './users/users.component';
import { UserService } from './_services/user.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RanksComponent } from './ranks/ranks.component';
import { RankService } from './_services/rank.service';
import { RequestsComponent } from './requests/requests.component';
import { RequestService } from './_services/request.service';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      UsersComponent,
      UserEditComponent,
      NavComponent,
      RanksComponent,
      RequestsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
      MatToolbarModule,
      MatCardModule,
      MatDialogModule,
      MatTableModule,
      MatInputModule,
      ReactiveFormsModule
   ],
   providers: [
      AuthService,
      UserService,
      RankService,
      RequestService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
export class PizzaPartyAppModule { }
