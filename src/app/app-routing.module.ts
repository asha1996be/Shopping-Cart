import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Shared/services/auth-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LoginComponent
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
