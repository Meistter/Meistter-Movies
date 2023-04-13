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

  peliculas: Movie[] = [
    {adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0}
  ]

  series: Movie[] = [{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0}]

  constructor(private peliculasService: PeliculasService, private seriesService: SeriesService){}

  ngOnInit(): void{


    this.peliculasService.getTrendingMovies()
      .subscribe(data=>{this.datos = data, this.peliculas = this.datos.results.slice(0,8) //guardamos en un nuevo array solo con 7 elementos
      })
      // Array de series
    this.seriesService.getTrendingSeries().subscribe(data=>{this.datosSeries = data, this.series = this.datosSeries.results.slice(0,8)})
  }



}
