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
  searchQuery: string | null =  'otto'
  datos: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  resultados : Movie[] = [] //esto es un array de objetos

  ngOnInit(): void {
    //buscamos

    //sacamos la busqueda del queryparam
    this.route.queryParamMap.subscribe(params => {
      this.searchQuery = params.get('search')
    })

    //logica a aplicar: en el nav al hacer click en buscar mandamos a la url un queryparam ?palabras-a-buscar, luego aqui en search obtenemos ese queryparam y hacemos la solicitud enviando ese query, de esa forma obtenemos los valores correspondientes e imprimimos
    if (this.searchQuery){
    this.searchService.searchPaginated(this.searchQuery).subscribe(data=>{this.resultados = data.results, console.log(data)})
    }

  }
  loadMore(){
    if (this.searchQuery)
    this.searchService.searchPaginated(this.searchQuery).subscribe(data=>{this.resultados =this.resultados.concat(data.results)})
  }


}
