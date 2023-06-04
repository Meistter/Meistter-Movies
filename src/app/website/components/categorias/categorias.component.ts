import { Component } from '@angular/core';
import { Categoria, CatObj } from 'src/app/models/caterogias';
import { Movie } from 'src/app/models/movie';
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
  backgroundImage : Movie[] = [{adult: false,
    backdrop_path: '',
    genres: [],
    id: 0,
    media_type: '',
    original_languge: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
    } //estado inicial
  ]
  
  ngOnInit(): void{
    this.categoriasService.getCategories().subscribe(data=>{this.genres=data.genres, console.log('en categorias',this.genres);
    })
    // Buscamos imagenes para llenar nuestro array y mostrar en caterogias
    this.categoriasService.getCategoryById('12',1).subscribe(data=>{this.backgroundImage = data.results})
  }
}
