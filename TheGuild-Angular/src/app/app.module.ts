import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      UsersComponent,
      UserEditComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatIconModule
   ],
   providers: [
      AuthService,
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
export class PizzaPartyAppModule { }
