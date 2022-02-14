import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit, OnDestroy {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$")]),
    userName: new FormControl('', [Validators.required]),
    password1: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(4)]),
    check: new FormControl(false)
  });

  emailControl = this.registerForm.controls['email'];
  userNameControl = this.registerForm.controls['userName'];
  passwordControl1 = this.registerForm.controls['password1'];
  passwordControl2 = this.registerForm.controls['password2'];
  checkControl = this.registerForm.controls['check'];

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) { }
  ngAfterViewInit(): void {
    console.log('REGISTER - AFTER VIEW INIT');
  }
  ngOnDestroy(): void {
    console.log('REGISTER - ON DESTROY');
  }

  ngOnInit(): void {
    console.log('REGISTER - ON INIT');
  }
  goToLogin() {
    this.router.navigate(['login'])
  }


  register() {

    if (this.passwordControl1.value !== this.passwordControl2.value)
      return alert("Las Contraseñas no coinciden");

    const user: User = {
      email: this.emailControl.value,
      userName: this.userNameControl.value,
      password: this.passwordControl1.value,
      admin: this.checkControl.value
    }

    this.registerService.registerUser(user).subscribe((data) => {

      if (data.status === "NOT OK")
        return alert(data.msg);

      Swal.fire({
        title: "Usuario Registradso",
        icon: "success",
        text: data.msg
      })

    }, error => {

      Swal.fire({
        title: "Error",
        icon: "error",
        text: error.message
      })

      // alert(error.message);
      // console.log(error);

    });
  }
}
