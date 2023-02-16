import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit{
  movies: any = [] //agregar tipado
  constructor(private peliculasService: PeliculasService){}

  ngOnInit(): void{
    this.peliculasService.getTrendingMovies()
      .subscribe(data=>{this.movies = data, console.log(data);
      })
  }
}
