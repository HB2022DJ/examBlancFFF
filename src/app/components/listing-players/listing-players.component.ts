import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Player } from 'src/app/models/player';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-listing-players',
  templateUrl: './listing-players.component.html',
  styleUrls: ['./listing-players.component.css']
})
export class ListingPlayersComponent implements OnInit {
  players: Player [] = []
  faUser = faUserPlus;
  fadelete = faUserMinus;
  faInfo = faInfoCircle;
  constructor( private teamService: TeamService, private http: HttpClient) { }

  ngOnInit(): void {
    this.teamService.findAll().subscribe(data =>{
      this.players = data;
    })
  }
  deletePlayer(id: number){
    this.teamService.remove(id).subscribe(data =>{
      this.ngOnInit()
    })
   }
}
