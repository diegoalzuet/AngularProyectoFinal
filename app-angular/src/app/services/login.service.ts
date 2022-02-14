import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin = environment.loginRestApi;
  private id = '';
  private token: any = null;
  private email = '';
  private userName = '';
  private admin = '';

  constructor(private httpClient: HttpClient) { }

  validateCredentials(email: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(this.urlLogin, { email, password })
      .pipe(
        map(response => {
          if (response.status === 'OK') {

            this.token = response.token;

            const decodedToken: any = jwt_decode(this.token);
            this.id = decodedToken?.id;
            this.userName = decodedToken?.userName;
            this.email = decodedToken?.email;
            this.admin = decodedToken?.admin;

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
    // return this.userName !== '';
    console.log("tokeeeeeeeee" , this.token);

    return (this.token !=='' && this.token !=null);
  }
  getUserInfo(): any {
    return {
      id: this.id,
      userName: this.userName,
      email: this.email,
      token: this.token,
      admin: this.admin
    }
  }
  getAll() {
    return this.httpClient.get<any>(this.urlLogin+'/admin');
  }

}
