import { Injectable } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { environment } from 'src/enviroments/enviroments';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {

  constructor(private peliculasService: PeliculasService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addApiKey(request)
    return next.handle(request);
  }

  private addApiKey(request: HttpRequest<unknown>){

    const key = environment.API_KEY //mi api key.
    return request.clone({params: request.params.set('api_key', key)}) //retornno la solicitud original modificada

  }
}
