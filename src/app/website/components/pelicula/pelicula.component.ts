import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Movie } from 'src/app/models/movie';
import { ComunicationService } from 'src/app/services/comunication.service';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  // corazon = false
@Input() corazon: boolean = false
// ponemos corazon como un input para poder recibir el true desde favoritos para activar el corazon al cargar
  constructor(private comunicationService: ComunicationService){}
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

//Aqui agregaremos el boton rojo de like si lo consigue en el local storage
ngOnInit(): void{
  this.corazon = false
  const likedMoviesSeries = localStorage.getItem('liked')
  let likedMovies = []
  if( likedMoviesSeries !== null){

    likedMovies = JSON.parse(likedMoviesSeries)
    // buscamos el elemento en el LS
      const resultado = likedMovies.findIndex( (movie: { id: number; }) => movie.id === this.movie.id );
    if (resultado !== -1){ //si es diferente de -1 significa que existe en LS por lo tanto le activamos el corazón
      this.corazon = true
    }
  }
}


  imgUrl = environment.IMG_BASE
  //! Cada Vez que hacemos click en favoritos debemos emitir una señal al componente favoritos para que este recargue la información
  saveOrDeleteFromLS(){
   //Primero obtenemos la lista del local storage
   const likedMoviesSeries = localStorage.getItem('liked')

   let likedMovies = []


  if(likedMoviesSeries === null){


      likedMovies.push(this.movie)
      // likedMovies.push(1)
      localStorage.setItem('liked', JSON.stringify(likedMovies))
  }
  if( likedMoviesSeries !== null){
      likedMovies = JSON.parse(likedMoviesSeries)

      const resultado = likedMovies.findIndex( (movie: { id: number; }) => movie.id === this.movie.id );


      //elimino
      if (resultado !== -1){
        likedMovies.splice(resultado,1)
        localStorage.setItem('liked', JSON.stringify(likedMovies))
        this.corazon = false
      }
      //añado
      if (resultado == -1){


        // if (likedMovies.length < 5){
        likedMovies.push(this.movie)
      this.corazon = true
      localStorage.setItem('liked', JSON.stringify(likedMovies))
        // }
      }
  }

    this.comunicationService.disparadorFavoritos.emit()

    //Estamos usando un servicio para poder emitir hacia un componente que no es padre ni hijo, aqui llamamos
    //al servicio y le decimos que emita, el que va a emitir es el servicio, y en favoritos nos suscribimos a la funcion emisora
    //del servicio para quedar al pendiente de cada vez que se ejecute la emision y ejecutar la funcion actualizar



  }


}
