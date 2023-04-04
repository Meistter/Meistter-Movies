import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      //* Aqui van las rutas hijas de este MODULO
      {
        path: 'dashboard',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'dashboard', //!no ponemos el '/' ya que no es el root principal, esta es algo como una app secundaria
        pathMatch: 'full'
      },

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
