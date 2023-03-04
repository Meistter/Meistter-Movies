import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Datos, Movie } from 'src/app/models/movie';
import { SeriesService } from 'src/app/services/series.service';
import { environment } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-seriep',
  templateUrl: './seriep.component.html',
  styleUrls: ['./seriep.component.css']
})
export class SeriepComponent {
  constructor(private route: ActivatedRoute, private seriesService: SeriesService){}
  imgurl = environment.IMG_BASE
  serie: any = { //modificar tipado para obtener más cosas

  }
  datos: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  series: Movie[] = []
  generos: any = []
  serieId: string | null = null
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.serieId = params.get('id')
      console.log(this.serieId);

      //ahora consultamos a la API
      if(this.serieId){
      this.seriesService.getSerie(this.serieId).subscribe(data=>{this.serie = data, this.generos = data.genres;
      })
      //peliculas relacionadas
      if(this.serieId){
        this.seriesService.getRelated(this.serieId).subscribe(data=>{this.datos = data, this.series = this.datos.results.slice(0,8)})
      }
      }
    })
  }
}
