import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/caterogias';
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
  generos: Categoria[] = [{id: 0, name: ''}]

  datos: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  peliculas: Movie[] = [
    {adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0}
  ]

  movieId: string | null = null
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.movieId = params.get('id')


      //ahora consultamos a la API
      if(this.movieId){
      this.peliculasService.getMovie(this.movieId).subscribe(data=>{this.pelicula = data, this.generos = data.genres})}
      //peliculas relacionadas
      if(this.movieId){
        this.peliculasService.getRelated(this.movieId).subscribe(data=>{
          if (data.total_pages > 0){
            this.datos = data, this.peliculas = this.datos.results.slice(0,8)}
          }
         )
      }
    })
  }

}
