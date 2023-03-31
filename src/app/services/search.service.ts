import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API = `${environment.API}/search/movie`

  //!Segundo metodo de busqueda(ENVIANDO INFORMACION ENTRE MODULOS A TRAVES DE UN SERVICIO CON UN OBSERBABLE),
  //!defino un observable para luego introducirle los datos en la funcion
  // private searchedData = new BehaviorSubject<any[]>([])
  // search$ = this.searchedData.asObservable()
  //!

  page = 1
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  // !Agregué un parametro pag:boolean para que la variable page solo aumente si estamos mandando a paginar, de esta forma usamos la busqueda y la paginacion en una misma funcion!!
  searchPaginated(query:string, pag:boolean){
    if(pag){
      this.page++;
    }
    return this.http.get<any>(this.API, {params: {query: query, page: this.page}})
  }


  // ! Segundo metodo de busqueda(ENVIANDO INFORMACION ENTRE MODULOS A TRAVES DE UN SERVICIO CON UN OBSERBABLE),
  //!Servicio para 2do metodo de busqueda enviando la informacion por array
  // getSearchedData(array: any){
  //   this.searchedData.next(array)
  // }
}
