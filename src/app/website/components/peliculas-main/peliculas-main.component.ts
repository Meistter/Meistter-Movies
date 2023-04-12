import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Datos, Movie } from 'src/app/models/movie';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-peliculas-main',
  templateUrl: './peliculas-main.component.html',
  styleUrls: ['./peliculas-main.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom     //ViewEncapsulation!!!!!
})
export class PeliculasMainComponent implements OnInit{
// En este componente estamos reutilizando el componente pelicula para mostrar los datos en la página Movies
constructor(private peliculasService: PeliculasService){}

finishPage = 0;
  actualPage: number = 1;

  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.loadMore();
      this.actualPage ++;

    }
  }

  datos: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  resultados : Movie[] = [] //esto es un array de objetos

    ngOnInit(): void{

      this.peliculasService.getMoviesMainPaginated().subscribe(data=>{this.datos = data,this.finishPage = data.total_pages, this.resultados = [...this.resultados, ...this.datos.results]})
          //aqui lo que estamos haciendo es concatenar el array results dentro del array resultados para que a medida que paginemos se junten en el array resultados todas las peliculas encontradas, de esta forma en el html iteraremos el array resultados en lugar del data.results

    }

    loadMore(){
      this.peliculasService.getMoviesMainPaginated().subscribe(data=>{this.datos = data, this.resultados = [...this.resultados, ...this.datos.results]})
    }
}
