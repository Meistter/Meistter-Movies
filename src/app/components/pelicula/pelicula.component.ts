import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Movie } from 'src/app/models/movie';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  @Output() atSaveFavorite: EventEmitter<string> = new EventEmitter<string>();
  @Input() movie: Movie = {
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
  } //estado inicial


  imgUrl = environment.IMG_BASE
  //! Cada Vez que hacemos click en favoritos debemos emitir una señal al componente favoritos para que este recargue la información
  saveOrDeleteFromLS(){
   //Primero obtenemos la lista del local storage
   const likedMoviesSeries = localStorage.getItem('liked')

   let likedMovies = []
   let bandera
   let i = 0

  if(likedMoviesSeries === null){


      likedMovies.push(this.movie)
      // likedMovies.push(1)
      localStorage.setItem('liked', JSON.stringify(likedMovies))
  }
  if( likedMoviesSeries !== null){
      likedMovies = JSON.parse(likedMoviesSeries)

      const resultado = likedMovies.findIndex( (movie: { id: number; }) => movie.id === this.movie.id );
      console.log(resultado);

      //elimino
      if (resultado !== -1){
        likedMovies.splice(resultado,1)
        localStorage.setItem('liked', JSON.stringify(likedMovies))
      }
      //añado
      if (resultado == -1){
        likedMovies.push(this.movie)
      // likedMovies.push(1)
      localStorage.setItem('liked', JSON.stringify(likedMovies))
      }
  }


   this.atSaveFavorite.emit() //!Aqui emitimos la señal al componente favoritos para que actualice


  }


}
