import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private router: Router, private searchService: SearchService){}

  searchField = new FormControl
// Creo el formulario
  results= []
ngOnInit(): void {
  // this.searchField.valueChanges
  // .pipe(debounceTime(500)) //!Aqui definimos el tiempo que debe pasar despues que el usuario hace una pausa en su escritura para que ahora si envie el query
  // .subscribe(value =>{
  //   this.searchQuery()
  // }) //aqui llamamos a ejecutar la busqueda cada vez q cambie el valor del input ya q le tenemos este observable o suscripcion activa

}

  searchQuery(event: { preventDefault: () => void; }){

    //!Segundo metodo de busqueda con esto hacemos que la url cambie
    //  this.router.navigate(['./search'], { queryParams: { search: this.searchField.value } })
    //!     Segundo Metodo de busqueda enviando el array con los resultados hacia el componente search
    // this.searchService.searchPaginated(this.searchField.value, false).subscribe(data=>{this.results = data, this.searchService.getSearchedData(this.results)})

    //!

    //ya aqui estamos obteniendo la informacion escrita en el input de busqueda
    //ahora enviamos como query param la información a la URL

    event.preventDefault() //con esto hacemos que el boton no recargue la pagina ya que es tipo submit
    //! Primer metodo de busqueda, mas simple
   this.router.navigate(['/search'], { queryParams: { search: this.searchField.value } })
    //!
  }
}
