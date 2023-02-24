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

    const { scrollTop, scrollHeight, clientHeight} = document.documentElement
    const pageIsNotMax = this.page < this.maxPage; //esta variable la usamos para verificar que no lleguemos a la ultima pagina existente en la api, para no cargar mas de las paginas existentes en la api lo cual daria error

    // if ((( scrollTop + clientHeight) >= (scrollHeight - 15)) && pageIsNotMax){ //esta es la validacion para saber si la persona llego al final del scroll de la pagina, la comparacion de estos valores nos da como resultado si esta o no al final, cada dato representa un numero

    this.page++;
    console.log(this.page);

    return this.http.get<Datos>(this.API, {params: {page: this.page}})


    }
  // }
}
