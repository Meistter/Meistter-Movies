import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Movie } from 'src/app/models/movie';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

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

  saveOrDeleteFromLS(){
   //Primero obtenemos la lista del local storage
   const likedMoviesSeries = localStorage.getItem('liked')
   let likedMovies = []
   let bandera
   let i = 0

   if (likedMoviesSeries){
    likedMovies = JSON.parse(likedMoviesSeries)
    console.log(likedMovies); //En este punto ya tenemos el array con las peliculas a la mano, debo buscar en el array la pelicula actual, si esta la borro y si no esta la agrego, luego vuelvo a ingresar el array al LS


    }else{ //si no existe liked en LS
      likedMovies.push(this.movie)
      likedMovies.push(1)
      localStorage.setItem('liked', JSON.stringify(likedMovies))
  }
   //si el id de la pelicula pertenece al LS entonces lo sacamos del LS

   //si no pertenece entonces lo añadimos al LS

  }


}
