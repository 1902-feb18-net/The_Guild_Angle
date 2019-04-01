import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { User } from '../_models/user';
import { Login } from '../_models/login';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private httpClient: HttpClient) { }

/*
getUsers(): Observable<User[]> {
  const url = `${this.baseUrl}`;
  console.log(`sending request to ${url}`);
  const response = this.httpClient.get<User[]>(url);
  return response.pipe(catchError(error => {
    console.log('error');
    console.log(error);
    return throwError('Encountered an error communicating with the server');
  }));
  //return this.http.get<User[]>(this.baseUrl + 'api/users/');
} */

getUsers(): Observable<User[]> {
  const baseUrl = environment.apiUrl;
  console.log(`Making request at API url ${baseUrl}`);
  const url = `${baseUrl}api/users`;
  return this.httpClient.get<User[]>(url, { withCredentials: true });
}

getUser(id): Observable<User> {
  const baseUrl = environment.apiUrl;
  console.log(`Making request at API url ${baseUrl}`);
  const url = `${baseUrl}api/users/`+ id;
  return this.httpClient.get<User>(url, { withCredentials: true });
}

/*getUser(id): Observable<User> {
  return this.httpClient.get<User>(this.baseUrl + 'api/users/' + id);
}*/

updateUser(id: number, user: User) {
  const baseUrl = environment.apiUrl;
  console.log(`Making request at API url ${baseUrl}`);
  const url = `${baseUrl}api/users/`+ id;
  return this.httpClient.put<User>(url,user, { withCredentials: true });
  //return this.httpClient.put(this.baseUrl + 'api/users/' + id, user);
}

async login(login: Login): Promise<Account> {
  // first, send request to login
  const url = `${this.baseUrl}api/account/login`;
  console.log(`request to ${url}`);
  const response = await this.httpClient.post(url, login, {
    observe: 'response',
    withCredentials: true
  }).toPromise();
  console.log('received:');
  console.log(response);
  // then, send request to details
  const url2 = `${this.baseUrl}api/account/details`;
  console.log(`request to ${url2}`);
  const account = await this.httpClient.get<Account>(url2, { withCredentials: true }).toPromise();
  console.log('received:');
  console.log(account);
  // when we get that, save in session storage the logged in user's info
  // (so if client refreshes page, we still have it)
  sessionStorage.setItem('account', JSON.stringify(account));
  // return the account details to the one calling this method
  return account;
}

}

