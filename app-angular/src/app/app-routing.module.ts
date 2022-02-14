import { ProtectedRouteGuard } from './guards/protected-route.guard';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { AccountComponent } from './features/account/account/account.component';
import { ListAccountsComponent } from './features/list-accounts/list-accounts/list-accounts.component';

const routes: Routes = [
  {
    path: 'carrito/:id',
    component: CartComponent
  },
  // {
  //   path: 'peliculas/:id',
  //   component: InfoComponent
  // },
  // {
  //   path: 'peliculas',
  //   component: MoviesComponent
  // },
  {
    path: 'peliculas',
    canActivate: [ProtectedRouteGuard],
    loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
    // component: LoginComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule)
    // component: RegisterComponent
  },
  // {
  //   path: 'info',
  //   component:InfoComponent
  // },
  {
    path: 'carrito',
    canActivate: [ProtectedRouteGuard],
    loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
    // component: CartComponent
  },
  {
    path:'account',
    canActivate: [ProtectedRouteGuard],
    component: AccountComponent
  },
  {
    path:'list-accounts',
    canActivate: [ProtectedRouteGuard, AdminRoleGuard],
    component: ListAccountsComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
