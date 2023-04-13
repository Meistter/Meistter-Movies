import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Datos, Movie } from 'src/app/models/movie';
import { SeriesService } from 'src/app/services/series.service';
@Component({
  selector: 'app-series-main',
  templateUrl: './series-main.component.html',
  styleUrls: ['./series-main.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom   //esto es ViewEncapsulation lo usamos para modificar desde el padre el CSS del hijo
})
export class SeriesMainComponent implements OnInit{
  constructor(private seriesService: SeriesService){}

  finishPage = 0;
  actualPage: number = 1;

  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.loadMore();
      this.actualPage ++;

    }
  }

  datos: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  };

  resultados : any = [
    {adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0},{adult: false,backdrop_path: 'string',genres: [],id: -1,media_type: 'string',original_languge: 'string',original_title: 'string',overview: 'string',popularity: 0,poster_path: 'string',release_date: 'string',title: 'string',video: false,vote_average: 0,vote_count: 0}
  ] //tiparlo

  ngOnInit(): void{
    this.seriesService.getSeriesMainPaginated().subscribe(data=>{this.datos = data, this.finishPage = data.total_pages, this.resultados = [...this.resultados, ...this.datos.results]}) //concatenamos


  }
  //View Encapsulation

  loadMore(){
    this.seriesService.getSeriesMainPaginated().subscribe(data=>{this.datos = data, this.resultados = [...this.resultados, ...this.datos.results]}) //concatenamos
  }
}
