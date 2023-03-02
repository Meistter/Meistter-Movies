import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router){}

  searchQuery(texto: string){
    //ya aqui estamos obteniendo la informacion escrita en el input de busqueda
    //ahora enviamos como query param la información a la URL

    this.router.navigate(['/search'], { queryParams: { search: texto } })

  }

}
