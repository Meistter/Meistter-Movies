import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Datos, Movie } from 'src/app/models/movie';
import { SeriesService } from 'src/app/services/series.service';
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
  datosSeries: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  peliculas: Movie[] = []
  series: Movie[] = []

  constructor(private peliculasService: PeliculasService, private seriesService: SeriesService){}

  ngOnInit(): void{


    this.peliculasService.getTrendingMovies()
      .subscribe(data=>{this.datos = data, this.peliculas = this.datos.results.slice(0,8) //guardamos en un nuevo array solo con 7 elementos
      })
      // Array de series
    this.seriesService.getTrendingSeries().subscribe(data=>{this.datosSeries = data, this.series = this.datosSeries.results.slice(0,8)})
  }



}
