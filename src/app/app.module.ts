import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { KeyInterceptor } from './interceptors/key.interceptor';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SerieComponent } from './components/serie/serie.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { PeliculasMainComponent } from './components/peliculas-main/peliculas-main.component';
import { SeriesMainComponent } from './components/series-main/series-main.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { CategoryComponent } from './pages/category/category.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SearchComponent } from './pages/search/search.component';
import { RelatedComponent } from './components/related/related.component';
import { SeriepComponent } from './pages/seriep/seriep.component';
@NgModule({
  declarations: [
    AppComponent,
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
    SeriepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule, PagerModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: KeyInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
