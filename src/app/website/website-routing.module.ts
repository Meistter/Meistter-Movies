import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { SeriepComponent } from './pages/seriep/seriep.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  {
    path: '', //estamos haciendo uso del layout
    //estamos usando el layout para tener un router-outlet dentro de otro de forma que el router-oulet padre pueda controlar el modulo privado y el publico, cada uno con sus hijos y paginas hijo
    component: LayoutComponent,
    children: [
      //Los hijos heredan las propiedades de LayoutComponent
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'movie/:id',
        component: MovieComponent
      },
      {
        path: 'serie/:id',
        component: SeriepComponent
      },
      {
        path: 'series',
        component: SeriesComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
