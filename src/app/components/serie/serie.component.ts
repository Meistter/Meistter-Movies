import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent{

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


}
