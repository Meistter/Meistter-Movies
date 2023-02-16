import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private API = `${environment.API}/trending/movie/day`
  constructor(private httpClient: HttpClient) { }

  getTrendingMovies(){
    return this.httpClient.get(this.API, {params: {language : 'es'}})

  }

}
