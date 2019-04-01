import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rank } from '../_models/rank';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  baseUrl = environment.apiUrl;
  rankUrl = 'api/Ranks/';

constructor(private http: HttpClient) { }

getRanks(): Observable<Rank[]> {
  return this.http.get<Rank[]>(this.baseUrl + this.rankUrl);
}

getRank(id): Observable<Rank> {
  return this.http.get<Rank>(this.baseUrl + this.rankUrl + id);
}

updateRank(id: number, rank: Rank) {
  return this.http.put(this.baseUrl + this.rankUrl + id, rank);
}
}
