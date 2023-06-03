import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/models/caterogias';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  @Input() categoria: Categoria ={
    id: 0,
    name: ''
  }
  @Input() backgroundImage = []
  
  ngOnInit(): void{
  
    
  }
}
