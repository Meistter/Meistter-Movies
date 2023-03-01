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
  serie: any = { //modificar tipado para obtener más cosas

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
