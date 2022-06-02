import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
apiUrl = environment.api + "/players"
players: Player [] = []
  constructor(private http:HttpClient) { }

    
  findAll(): Observable<Player[]>{
    return this.http.get<Player[]>(this.apiUrl)
  }
  add(player: Player): Observable<Player>{
    return this.http.post<Player>(this.apiUrl, player)
  }
  findById(id: number): Observable<Player> {
    return this.http.get<Player>(this.apiUrl + '/' + id);
  }
  remove(id: number): Observable<Player> {
    return this.http.delete<Player>(this.apiUrl + '/' + id);
    
  }
}
