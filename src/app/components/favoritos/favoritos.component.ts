import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FavoritosComponent implements OnInit{

  constructor(private comunicationService: ComunicationService){}
  movies: Movie[] = []
  likedMoviesSeries: string | null = null
  visualizar = false
  ngOnInit(){

    this.actualizar()
    this.comunicationService.disparadorFavoritos.subscribe(data=>{this.actualizar()})

    //Nos estamos subscribiendo al emisor de favoritos para que cada vez que ejecute aqui podamos llamar a ejecucion a la funcion actualizar
  }

  actualizar(){
    this.likedMoviesSeries = localStorage.getItem('liked')

    if(this.likedMoviesSeries !== null){

      this.movies = JSON.parse(this.likedMoviesSeries)
      if (this.movies.length>0){
        this.visualizar = true
      }
      else
      {
        this.visualizar = false
      }
  }


}
}
