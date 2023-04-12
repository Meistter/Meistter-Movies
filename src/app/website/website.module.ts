import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';
import { SeriepComponent } from './pages/seriep/seriep.component';
import { SeriesComponent } from './pages/series/series.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { QuicklinkModule} from 'ngx-quicklink';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SerieComponent } from './components/serie/serie.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PeliculasMainComponent } from './components/peliculas-main/peliculas-main.component';
import { SeriesMainComponent } from './components/series-main/series-main.component';
import { CategoryComponent } from './pages/category/category.component';
import { RelatedComponent } from './components/related/related.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PeliculasComponent,
    PeliculaComponent,
    SerieComponent,
    CategoriasComponent,
    CategoriaComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    PeliculasMainComponent,
    SeriesMainComponent,
    CategoryComponent,
    MovieComponent,
    SearchComponent,
    RelatedComponent,
    SeriepComponent,
    FavoritosComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    QuicklinkModule,
    ReactiveFormsModule,
    MaterialModule,
    InfiniteScrollModule
  ]
})
export class WebsiteModule { }
