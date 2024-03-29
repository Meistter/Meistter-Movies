import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      //*
      {
        path: '',
        redirectTo: 'login', //!no ponemos el '/' ya que no es el root principal, esta es algo como una app secundaria
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
