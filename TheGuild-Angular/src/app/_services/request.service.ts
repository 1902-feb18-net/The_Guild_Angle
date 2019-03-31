import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../_models/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl = environment.apiUrl;
  requestUrl = 'api/request/';

constructor(private http: HttpClient) { }

getRequests(): Observable<Request[]> {
  return this.http.get<Request[]>(this.baseUrl + this.requestUrl);
}

getRequest(id): Observable<Request> {
  return this.http.get<Request>(this.baseUrl + this.requestUrl + id);
}

updateRequest(id: number, request: Request) {
  return this.http.put(this.baseUrl + this.requestUrl + id, request);
}
}
