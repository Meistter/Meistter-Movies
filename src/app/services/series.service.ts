import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Datos, Movie } from '../models/movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  page = 0
  private API = `${environment.API}/trending/tv/day`
  private APISERIE = `${environment.API}/tv/`
  private API_RELATED = `${environment.API}/tv/`

  constructor(private http: HttpClient) { }

  getRelated(id:string){
      return this.http.get<Datos>(`${this.API_RELATED}${id}/recommendations`)
  }

  getSerie(id : string){
    return this.http.get<Movie>(`${this.APISERIE}${id}`)
  }

  getTrendingSeries(){
    return this.http.get<Datos>(this.API)

  }

  getSeriesMainPaginated(){

    //validar que no paginemos mas de la cantidad de paginas que trae la api
  this.page++;

  return this.http.get<Datos>(this.API, {params: {page: this.page}})


  }

}
