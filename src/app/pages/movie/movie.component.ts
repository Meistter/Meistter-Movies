import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
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
  movieId: string | null = null
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.movieId = params.get('id')
      console.log(this.movieId);

      //ahora consultamos a la API
      if(this.movieId){
      this.peliculasService.getMovie(this.movieId).subscribe(data=>{this.pelicula = data, console.log(this.pelicula);
      })
      }
    })
  }
}
