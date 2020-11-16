import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // definir l'adresse
  matchUrl = 'api/matches';
  constructor(private httpClient:HttpClient) { }

  // Get all objects
  getAllMatches() {
    return this.httpClient.get(this.matchUrl);
  }

  //Get one Object
  getMatchById(id:number) {
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }

  // Add object to DB
  addMatch(match:any){
    return this.httpClient.post(this.matchUrl, match);
  }

  // Delete Object By ID
  deleteMatch(id:number) {
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }

  // Edit Object



}
