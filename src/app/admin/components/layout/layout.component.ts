import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
//Este layout lo usaremos para poner el formato del menu administrativo
  constructor(private auth: AuthService, private router: Router){}
  logout(){
    this.auth.logout().then(() => {
      this.router.navigate(['/auth/login']);
    })
    .catch(() => {
      console.log('error al desloguear');
    });
  }
}
