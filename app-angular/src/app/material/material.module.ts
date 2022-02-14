import { LoginComponent } from './../features/login/components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { MovieService } from '../features/movies/services/movie.service';
import { LoginService } from '../features/login/services/login.service';
import { RegisterComponent } from '../features/register/components/register/register.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule

  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers:[
    MovieService,
    LoginService,
    RegisterComponent
  ]
})
export class MaterialModule { }
