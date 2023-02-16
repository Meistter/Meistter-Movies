import { Component, Input } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  imgUrl = environment.IMG_BASE
  @Input() movie: any = {
  }
}
