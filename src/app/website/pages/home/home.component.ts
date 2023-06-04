import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private peliculasService:PeliculasService){    
  }
  movieContent : Movie[] = []
  headerBackground = ''
  movieTitle = ''
  movieId = 0
  min = Math.ceil(1);
  max = Math.floor(20);
  numero = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  ngOnInit(): void {
   this.peliculasService.getTrendingMovies().subscribe((data)=>{this.movieContent = data.results, this.headerBackground = environment.IMG_BASE_ORIGINAL + this.movieContent[this.numero].backdrop_path, this.movieTitle = this.movieContent[this.numero].title, this.movieId = this.movieContent[this.numero].id})
   
  }
  
  
}
