import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Player } from 'src/app/models/player';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.css']
})
export class DetailPlayerComponent implements OnInit {
player!: Player;
faBack =faRotateLeft;
  constructor( private  activedRoute: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit(): void {

    let id:number = parseInt(<string>this.activedRoute.snapshot.paramMap.get('id'));
    this.teamService.findById(id).subscribe(data =>{
      this.player = data;
    });
  }

}
