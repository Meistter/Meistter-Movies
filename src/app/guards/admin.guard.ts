import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
//!Este guardian nos permitira permitir el ingreso al panel administrador solo a usuarios logueados que tengan de rol 'admin' !!!!
//!El resto es redirigido al home, recordar que en el app-router le definimos a la ruta /admin el uso de este guardian y ingresaran las personas dependiendo si este
//!Retorna true o false

export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){}


canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('respuesta',this.authService.hasUser());
      return this.authService.hasUser()
      .pipe(
        map(user => user === null ? false : true), //si no hay usuario retorna false si no retorna true
        tap(hasUser => {
          if (!hasUser) {this.router.navigate(['/auth/login'])} //aqui redireccionamos dependiendo de la respuesta, si no hay usuario (!hasUser) redireccionamos al logueo
        })
      )



  }

}
