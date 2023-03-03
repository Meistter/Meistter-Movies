import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Datos, Movie } from 'src/app/models/movie';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { environment } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  constructor(private route: ActivatedRoute, private peliculasService: PeliculasService){}
  imgurl = environment.IMG_BASE

  pelicula: any = { //modificar tipado
  }

  datos: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  peliculas: Movie[] = []

  movieId: string | null = null
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.movieId = params.get('id')
      console.log(this.movieId);

      //ahora consultamos a la API
      if(this.movieId){
      this.peliculasService.getMovie(this.movieId).subscribe(data=>{this.pelicula = data})
      }
      //peliculas relacionadas
      if(this.movieId){
        this.peliculasService.getRelated(this.movieId).subscribe(data=>{this.datos = data, this.peliculas = this.datos.results.slice(0,8)})
      }
    })
  }

}
