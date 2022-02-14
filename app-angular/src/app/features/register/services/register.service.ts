import { environment } from './../../../../environments/environment';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registeredUsers: User[] = [];
  // private url = environment.moviesRestApi + 'registered_users';
  private url = environment.registerApi;

  constructor(
    private httpClient: HttpClient
  ) {
    // this.getRegisteredUsers().subscribe(
    //   users => this.registeredUsers = users);
  }

  // getRegisteredUsers(): Observable<User[]> {
  //   return this.httpClient.get<User[]>(this.url);
  // }

  // registerUser(user: User) {
  //   if (!this.registeredUsers.find(u => u.user === user.user))
  //     return this.httpClient.post<User>(this.url, user);
  //   else
  //     return null;
  // }

  registerUser(user:User){
    return this.httpClient.post<any>(this.url,user);
  }
}
