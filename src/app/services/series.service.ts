import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Datos } from '../models/movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private API = `${environment.API}/trending/tv/day`
  constructor(private http: HttpClient) { }

  getTrendingSeries(){
    return this.http.get<Datos>(this.API)

  }

}
