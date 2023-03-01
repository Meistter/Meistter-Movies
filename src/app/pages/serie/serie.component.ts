import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { SeriesService } from 'src/app/services/series.service';
import { environment } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {
  constructor(private route: ActivatedRoute, private seriesService: SeriesService){}
  imgurl = environment.IMG_BASE
  serie: Movie = {
  adult: false,
  backdrop_path: 'string',
  genre_ids: [],
  id: 0,
  media_type: 'string',
  original_languge: 'string',
  original_title: 'string',
  overview: 'string',
  popularity: 0,
  poster_path: 'string',
  release_date: 'string',
  title: 'string',
  video: false,
  vote_average: 0,
  vote_count: 0
  }
  serieId: string | null = null
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.serieId = params.get('id')
      console.log(this.serieId);

      //ahora consultamos a la API
      if(this.serieId){
      this.seriesService.getSerie(this.serieId).subscribe(data=>{this.serie = data, console.log(this.serie);
      })
      }
    })
  }
}
