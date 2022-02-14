import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  id = '';
  userName = '';
  email = '';
  admin = '';
  gender = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    let user = this.loginService.getUserInfo();
    console.log(user);


    id: this.id,

    this.id = user.id;
    this.userName = user.userName;
    this.email = user.email;
    this.admin = user.admin;
    this.gender = 'https://cdn.pixabay.com/photo/2016/11/26/18/56/exercising-1861413_1280.png' ;

  }

}
