import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl = 'api/players';
  constructor(private httpClient:HttpClient) { }

  // Get all Players from DB
  getAllPlayers() {
    return this.httpClient.get(this.playerUrl);
  }

  // Get Player By ID
  getPlayerById(id:number){
    return this.httpClient.get(`${this.playerUrl}/${id}`);
  }

  // Delete Player
  deletePlayer(id:number){
    return this.httpClient.delete(`${this.playerUrl}/${id}`);
  }

  // Add Player
  addPlayer(player:any) {
    return this.httpClient.post(this.playerUrl, player);
  }

  // Edit Player
  editPlayer(player:any) {   
    return this.httpClient.put(`${this.playerUrl}/${player.id}`, player);
  }
}
