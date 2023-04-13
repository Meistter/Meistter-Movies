import { Component } from '@angular/core';
import { Categoria, CatObj } from 'src/app/models/caterogias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  constructor(private categoriasService: CategoriasService){}

  //en este objeto almacenamos la respuesta de la api
  genres: Categoria[] = [
    {id:-1,name:''}, {id:-1,name:''}, {id:-1,name:''}, {id:-1,name:''}, {id:-1,name:''}, {id:-1,name:''}, {id:-1,name:''}, {id:-1,name:''}
]

  ngOnInit(): void{
    this.categoriasService.getCategories().subscribe(data=>{this.genres=data.genres})
  }
}
