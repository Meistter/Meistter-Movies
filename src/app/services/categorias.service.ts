import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Categoria, CatObj } from '../models/caterogias';
import { Datos } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private API = `${environment.API}/genre/movie/list`
  private apiCatUrl = `${environment.API}/discover/movie/`
  constructor(private http: HttpClient) { }


  getCategories(){
    return this.http.get<CatObj>(this.API)
  }

  getCategoryById(id: string, page: number){ //funcion para obtener pagina de 1 categoria
    return this.http.get<Datos>(this.apiCatUrl, {params:{ with_genres : id, page: page }})
  }


}
