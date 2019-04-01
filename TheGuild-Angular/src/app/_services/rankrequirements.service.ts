import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rankrequirements } from '../_models/rankrequirements';

@Injectable({
  providedIn: 'root'
})
export class RankrequirementsService {

  baseUrl = environment.apiUrl;
  rankrequirementsUrl = 'api/RankRequirements/';

constructor(private http: HttpClient) { }

getRankrequirements(): Observable<Rankrequirements[]> {
  return this.http.get<Rankrequirements[]>(this.baseUrl + this.rankrequirementsUrl);
}

getRankrequirement(id): Observable<Rankrequirements> {
  return this.http.get<Rankrequirements>(this.baseUrl + this.rankrequirementsUrl + id);
}

updateRankrequirement(id: number, rankrequirements: Rankrequirements) {
  return this.http.put(this.baseUrl + this.rankrequirementsUrl + id, rankrequirements);
}
}
