import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
//PreloadAllModules: Carga todos los modules en la web pero uno detras de otro solo cuando se esta desocupado, ayuda a optimizar la carga de la web
//CustomPreloadService: Es un servicio creado manualmente por nosotros donde definimos que cargaran solo los moduloes que en el app-routing les pusimos load = true

//* QuickLinkStrategy:
//ESTE MODULO NO ES OFICIAL DE ANGULAR, nos permite CARGAR solo los Modulos que se muestran en pantalla en el momento, de esta forma se iran cargando a medida que le fuera posible al usuario acceder a él
//el QuicklinkModule lo importamos en el app.module //? npm install ngx-quicklink
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdminGuard } from './guards/admin.guard';
const routes: Routes = [

  {//aqui estamos importando el Modulo de administracion que creamos (cms)
    path: '',
    loadChildren: ()=> import('../app/website/website.module').then(m => m.WebsiteModule),
    data:{
      preload: true
    }
  },
  {//aqui estamos importando el Modulo de administracion que creamos (cms)
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: ()=> import('../app/admin/admin.module').then(m => m.AdminModule)
  },
  {//esta es la ruta para cuando no se encuentra la ruta, error 404, esto tiene que estar de ultimo en esta lista de rutas
    path: '**',
   //!Falta crear la ruta no encontrada
    component: NotFoundComponent
  }

];

@NgModule({                                                 //estrategia de carga de modulos
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
