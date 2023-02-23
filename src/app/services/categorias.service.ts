import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Categoria, CatObj } from '../models/caterogias';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private API = `${environment.API}/genre/movie/list`
  constructor(private http: HttpClient) { }


  getCategories(){
    return this.http.get<CatObj>(this.API)
  }
}
