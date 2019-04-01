import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adventurerparty } from '../_models/adventurerparty';

@Injectable({
  providedIn: 'root'
})
export class AdventurerpartyService {

  baseUrl = environment.apiUrl;
  adventurerpartyUrl = 'api/AdventurerParty/';

constructor(private http: HttpClient) { }

getAdventurerpartys(): Observable<Adventurerparty[]> {
  return this.http.get<Adventurerparty[]>(this.baseUrl + this.adventurerpartyUrl);
}

getAdventurerparty(id): Observable<Adventurerparty> {
  return this.http.get<Adventurerparty>(this.baseUrl + this.adventurerpartyUrl + id);
}


}
