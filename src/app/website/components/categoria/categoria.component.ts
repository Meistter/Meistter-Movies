import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/models/caterogias';
import { environment } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  URL = environment.IMG_BASE_ORIGINAL
  @Input() categoria: Categoria ={
    id: 0,
    name: ''
  }
  @Input() bgimage = ''
  
  ngOnInit(): void{
  
    console.log('esto es en categoria',this.bgimage);
   
    
    
  }
}
