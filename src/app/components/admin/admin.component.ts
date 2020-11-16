import { UserService } from './../../services/user.service';
import { PlayerService } from './../../services/player.service';
import { Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  players: any;
  matches: any;
  users: any;
  constructor(
    private matchService: MatchService,
    private playerService: PlayerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.players = data;
      }
    );
    this.getAllUsers();
    this.getMatches();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  getMatches() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data;
      }
    );
  }
  // declaration d'une fonction
  display(id: number) {
    this.router.navigate([`display-player/${id}`]);
  }
  edit(id: number) {
    this.router.navigate([`edit-player/${id}`]);
  }
  delete(id: number) {
    alert(id);
  }

  deleteMatch(id: number) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.getMatches();
      }
    )
  }

  deleteUser(id:any) {
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log('delete successfully'); 
        this.getAllUsers();
      }
    )
  }

}
