import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './features/menu/components/menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { AccountComponent } from './features/account/account/account.component';
import { ListAccountsComponent } from './features/list-accounts/list-accounts/list-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountComponent,
    ListAccountsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
