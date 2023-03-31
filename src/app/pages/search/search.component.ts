import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Datos, Movie } from 'src/app/models/movie';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService, private route: ActivatedRoute){}
  searchQuery: any
  //! esto es del segundo metodo de busqueda(ENVIANDO INFORMACION ENTRE MODULOS A TRAVES DE UN SERVICIO CON UN OBSERBABLE)
  // datos: any

  datos: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  resultados : Movie[] = [] //esto es un array de objetos

  ngOnInit(): void {
    //!Segundo metodo de busqueda(ENVIANDO INFORMACION ENTRE MODULOS A TRAVES DE UN SERVICIO CON UN OBSERBABLE),
    //! estamos subscritos a un observable para traernos los datos
    // this.searchService.search$.subscribe(data=>{this.datos = data,this.resultados = this.datos.results})

//buscamos
    //*sacamos la busqueda del queryparam

    this.route.queryParamMap.subscribe(params => {
      this.searchQuery = params.get('search'),
        this.searchService.searchPaginated(this.searchQuery, false).subscribe(data=>{this.resultados = data.results})
                                                  // con este false estamos diciendo que no es paginacion, es busqueda inicial

    })
  }

  loadMore(){
    if (this.searchQuery)
    this.searchService.searchPaginated(this.searchQuery, true).subscribe(data=>{this.resultados =this.resultados.concat(data.results)})
  }


}
