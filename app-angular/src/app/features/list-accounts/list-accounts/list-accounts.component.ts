import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent implements OnInit {

  accounts:any =[];
  id='';
  fullName='';
  email = '';
  phone = '';
  role='';


  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
     this.loginService.getAll().subscribe(data=>{
       console.log(data);
      this.accounts = data;

     });

  }

}
