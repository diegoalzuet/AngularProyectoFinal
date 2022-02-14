import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private registeredUser: User[] = [];
  // private url = environment.moviesRestApi + 'registered_users';

  //API login en server
  private urlLogin = environment.loginRestApi;
  private token: any = null;
  private user = '';
  private userName = '';

  constructor(
    private httpClient: HttpClient
  ) {
    // this.getList().subscribe(
    //   users => this.registeredUser = users
    // )
  }
  // getList(): Observable<User[]> {
  //   return this.httpClient.get<User[]>(this.url);
  // }

  //se hace el post y responde un json que se decodifica para enviar verdadero si las credenciales son correctas,
  //en caso contrario
  validateCredentials(user: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(this.urlLogin, { user, password })
      .pipe(
        map(response => {
          if (response.status === 'OK') {
            this.token = response.token;
            const decodedToken: any = jwt_decode(this.token);
            this.user = decodedToken?.user;
            this.userName = decodedToken?.userName;
            return true;
          } else {
            this.token = null;
            return false;
          }
        })
      )
  }

  getToken(): any {
    return this.token;
  }
  isUserLoggedIn() {
    return this.user !== '';
  }
  getUserInfo(): any {
    return {
      user: this.user,
      userName: this.userName
    }
  }

  // validateUser(user: string, password: string): Boolean {
  //   const u = this.registeredUser.find(u => u.user.toLowerCase() === user.toLowerCase() && u.password === password)
  //   return u != undefined;
  // }

}
