import { Injectable } from '@angular/core';
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

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addApiKey(request)
    return next.handle(request);
  }

  private addApiKey(request: HttpRequest<unknown>){
    const idioma = window.navigator.language
    const key = environment.API_KEY //mi api key.
    return request.clone({setParams: {api_key: key, language: idioma}}) //retornno la solicitud original modificada
    //le estamos asignando de parametros el api-key y el lenguaje del explorador
  }
}
