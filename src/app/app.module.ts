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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PeliculasComponent,
    PeliculaComponent,
    SerieComponent,
    CategoriasComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: KeyInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
