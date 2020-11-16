import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'api/users';
  constructor(private httpClient:HttpClient) { }

  getAllUsers() {
    return this.httpClient.get(this.userUrl);
  }

  getUserById(id:number){
    // api/users/5
    return this.httpClient.get(`${this.userUrl}/${id}`);
  }

  deleteUser(id:number) {
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }

  editUser(user:any){
    return this.httpClient.put(`${this.userUrl}/${user.id}`, user);
  }


}
