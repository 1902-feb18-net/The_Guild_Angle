import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestinggroup } from '../_models/requestinggroup';

@Injectable({
  providedIn: 'root'
})
export class RequestinggroupService {

  baseUrl = environment.apiUrl;
  requestinggroupUrl = 'api/RequestingGroup/';

constructor(private http: HttpClient) { }

getRequestinggroups(): Observable<Requestinggroup[]> {
  return this.http.get<Requestinggroup[]>(this.baseUrl + this.requestinggroupUrl);
}

getRequestinggroup(id): Observable<Requestinggroup> {
  return this.http.get<Requestinggroup>(this.baseUrl + this.requestinggroupUrl + id);
}


}
