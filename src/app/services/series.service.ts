import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Datos } from '../models/movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  page = 0
  private API = `${environment.API}/trending/tv/day`

  constructor(private http: HttpClient) { }

  getTrendingSeries(){
    return this.http.get<Datos>(this.API)

  }

  getSeriesMainPaginated(){

    //validar que no paginemos mas de la cantidad de paginas que trae la api
  this.page++;

  return this.http.get<Datos>(this.API, {params: {page: this.page}})


  }

}
