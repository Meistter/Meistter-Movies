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
  genre_ids: [],
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




}
