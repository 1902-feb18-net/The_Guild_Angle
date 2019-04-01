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
import { JwtModule } from '@auth0/angular-jwt';
import {MatSelectModule} from '@angular/material'

export function tokenGetter() {
   return localStorage.getItem('token');
}

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
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
      MatToolbarModule,
      MatCardModule,
      MatDialogModule,
      MatTableModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:4200'],
            blacklistedRoutes: ['localhost:4200/api/account']
         }
      }),
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
