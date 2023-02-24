import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Datos } from '../models/movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private API = `${environment.API}/trending/movie/day`
  page = 0
  maxPage = 1000
  constructor(private http: HttpClient) { }

  getTrendingMovies(){
    return this.http.get<Datos>(this.API)
  }
  getMoviesMainPaginated(){


    this.page++;

    return this.http.get<Datos>(this.API, {params: {page: this.page}})


    }
  // }
}
