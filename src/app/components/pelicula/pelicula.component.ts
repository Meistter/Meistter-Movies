import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Movie } from 'src/app/models/movie';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  imgUrl = environment.IMG_BASE

  @Input() movie: Movie = {
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  id: 0,
  media_type: '',
  original_languge: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '/5DNRr2juXdwtvktwXxwuk9Usk8O.jpg',
  release_date: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0
  } //estado inicial
  finalImgUrl = this.imgUrl + this.movie.poster_path



}
