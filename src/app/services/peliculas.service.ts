import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Datos, Movie } from '../models/movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private API = `${environment.API}/trending/movie/day`
  private APIMOVIE = `${environment.API}/movie/`
  page = 0

  constructor(private http: HttpClient) { }

  getMovie(id : string){
    return this.http.get<Movie>(`${this.APIMOVIE}${id}`)
  }

  getTrendingMovies(){
    return this.http.get<Datos>(this.API)
  }
  getMoviesMainPaginated(){

      //validar que no paginemos mas de la cantidad de paginas que trae la api
    this.page++;

    return this.http.get<Datos>(this.API, {params: {page: this.page}})


    }

}
