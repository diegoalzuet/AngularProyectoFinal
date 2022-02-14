import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
// import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  userControl = this.loginForm.controls['username'];
  passwordControl = this.loginForm.controls['password'];

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  ngAfterViewInit(): void {
    console.log('LOGIN - AFTER VIEW INIT');
  }
  ngOnDestroy(): void {
    console.log('LOGIN - ON DESTROY')
  }

  ngOnInit(): void {
    console.log('LOGIN - ON INIT')
  }
  goToRegister(){
    this.router.navigate(['register']);
  }

  submit() {
    const email = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    this.loginService.validateCredentials(email, password)
      .subscribe(res => {
        if (res) {
          localStorage.setItem("user",JSON.stringify(this.loginService.getUserInfo()))


          console.log(this.loginService.isUserLoggedIn());
          this.router.navigate(['peliculas']);
        }
        else{
          Swal.fire({
            title: "Error",
            icon: "error",
            text: "Error en las credenciales"
          })
        }
      })
  }
}
