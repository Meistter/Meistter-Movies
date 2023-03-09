import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FavoritosComponent implements OnInit{

  movies: Movie[] = []
  likedMoviesSeries: string | null = null

  ngOnInit(){
    this.actualizar()
  }

  actualizar(){
    this.likedMoviesSeries = localStorage.getItem('liked')

    if(this.likedMoviesSeries !== null){
      this.movies = JSON.parse(this.likedMoviesSeries)
      }
  }


}
