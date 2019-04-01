import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Progress } from '../_models/progress';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  baseUrl = environment.apiUrl;
  progressUrl = 'api/progress/';

constructor(private http: HttpClient) { }

getProgresses(): Observable<Progress[]> {
  return this.http.get<Progress[]>(this.baseUrl + this.progressUrl);
}

getProgress(id): Observable<Progress> {
  return this.http.get<Progress>(this.baseUrl + this.progressUrl + id);
}


}
