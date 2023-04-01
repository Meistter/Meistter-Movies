import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Datos, Movie } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router'; //este componente nos permitira hacer uso de los parametros que ponemos en la url
import { Categoria, CatObj } from 'src/app/models/caterogias';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom     // Esto es lo q nos permite referenciar desde este componente el CSS del componente hijo y modificarlo
})
export class CategoryComponent implements OnInit{

  constructor(private route: ActivatedRoute, private categoriasService: CategoriasService){}

  nombre = 'Nombre Categoria'
  result: any = {}

    //En esta pagina tenemos la logica para la pagina de 1 categoria especifica, aqui obtenemos el ID de la URL y consumimos la api mandando la url, como QUERY PARAM
  categoryId: string | null = null;


  page = 1
  datos: Datos = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  resultados : Movie[] = [] //esto es un array de objetos

  //aqui traemos el listado total de categorias, esto nos servira para en esa lista buscar el id que conseguimos de la URL y extraer el nombre
  catObj: CatObj = {
    genres : []
  }
  cat : Categoria[] = [] //en este array almacenamos las categorias(ya que en catObj nos llega un array con un array dentro con las categorias)

  ngOnInit():void{
    this.route.paramMap.subscribe(params =>{ //con esto conseguimos la Id de la URL y lo guardamos en una variable
      this.categoryId = params.get('id') //si aqui le llamo 'id' en el componente de rutas le debo llamar igualmente /:id
      })

      if (this.categoryId){
        this.categoriasService.getCategoryById(this.categoryId, this.page).subscribe(data=>{this.datos = data, this.resultados = this.datos.results})
     }

     //Buscamos el nombre de la categoria

     //Lo que hacemos en todo este proceso es: Buscamos TODAS las categorias, luego con el ID que tenemos en categoryId buscamos en el array obtenido y comparamos para conseguir la categoria con nuestro ID, de ahi obtenemos el nombre
     this.categoriasService.getCategories()
     .subscribe(data=>{
      this.catObj=data,
      this.cat = this.catObj.genres,
      this.result = this.cat.find(e => e.id === Number(this.categoryId)), //Aqui usamos la funcion Number ya que categoryID puede ser string o null, no sirve la funcion parseInt ya q puede ser null, la solucion es usar Number
      this.nombre = this.result.name;
     })



  }


  loadMore(){
    this.page++
    if (this.categoryId){
      this.categoriasService.getCategoryById(this.categoryId, this.page).subscribe(data=>{this.datos = data, this.resultados = this.resultados.concat(this.datos.results) })
   }
  }


}
