import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
addPlayer: Player = new Player();
  constructor( private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    alert('ajout du joueur bien reçu');
    this.teamService.add(this.addPlayer).subscribe(data =>{
      this.router.navigate(['/'])
      console.log(this.addPlayer);
      
    })
  }

}
