import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ComunicationService } from 'src/app/services/comunication.service';
import { environment } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent{
  corazon = false
  constructor(private comunicationService: ComunicationService){}
  @Input() serie: Movie = {
    adult: false,
    backdrop_path: '',
    genres: [],
    id: 0,
    media_type: '',
    original_languge: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
    } //objeto serie de tipo Movie


    imgUrl = environment.IMG_BASE

    saveOrDeleteFromLS(){
      //Primero obtenemos la lista del local storage
      const likedMoviesSeries = localStorage.getItem('liked')

      let likedMovies = []
      let bandera
      let i = 0

     if(likedMoviesSeries === null){


         likedMovies.push(this.serie)
         // likedMovies.push(1)
         localStorage.setItem('liked', JSON.stringify(likedMovies))
     }
     if( likedMoviesSeries !== null){
         likedMovies = JSON.parse(likedMoviesSeries)

         const resultado = likedMovies.findIndex( (serie: { id: number; }) => serie.id === this.serie.id );
         console.log(resultado);

         //elimino
         if (resultado !== -1){
           likedMovies.splice(resultado,1)
           this.corazon = false
           localStorage.setItem('liked', JSON.stringify(likedMovies))
         }
         //añado
         if (resultado == -1){
           likedMovies.push(this.serie)
           this.corazon = true
         localStorage.setItem('liked', JSON.stringify(likedMovies))
         }
     }
     this.comunicationService.disparadorFavoritos.emit()
      //Estamos usando un servicio para poder emitir hacia un componente que no es padre ni hijo, aqui llamamos
      //al servicio y le decimos que emita, el que va a emitir es el servicio, y en favoritos nos suscribimos a la funcion emisora
      //del servicio para quedar al pendiente de cada vez que se ejecute la emision y ejecutar la funcion actualizar

     }
}
