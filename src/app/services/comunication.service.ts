import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { PeliculaComponent } from '../components/pelicula/pelicula.component';
@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  @Output() disparadorFavoritos: EventEmitter<string> = new EventEmitter<string>();

  //Este emisor nos permitira mandar una señal desde pelicula/serie hasta favoritos de forma que podamos actualizar
  //cada vez que ejecutemos este emisor, el cual sera ejecutado desde pelicula/serie
  constructor() { }


}
