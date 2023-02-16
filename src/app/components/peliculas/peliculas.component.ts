import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Datos } from 'src/app/models/movie';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit{

  datos: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  constructor(private peliculasService: PeliculasService){}

  ngOnInit(): void{
    this.peliculasService.getTrendingMovies()
      .subscribe(data=>{this.datos = data, console.log(this.datos.results)
      })
  }



}
