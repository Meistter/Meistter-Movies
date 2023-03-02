import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API = `${environment.API}/search/movie`
  page = 0
  constructor(private http: HttpClient) { }

  searchPaginated(query:string){//hacer tipado
    this.page++;
    return this.http.get<any>(this.API, {params: {query: query, page: this.page}})
  }


}
