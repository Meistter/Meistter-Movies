import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true //esto es para ocultar la contraseña
  loginError : boolean = false
  constructor(private router: Router,
    private authService: AuthService){
  }

  form = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]), //de esta forma podemos declarar los FormControl de forma más ordenada, dentro de un FormGroup
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    })


    getRequiredErrorMessage(){
      return 'Este campo es requerido'
    }
    getEmailErrorMessage(){
      return 'Formato Invalido'
    }
    getLoginError(){
      return 'Usuario o contraseña invalidos'
    }
    onSubmit(){
      console.log('form: ',this.form.value);
    }


    login(event: Event) {
      event.preventDefault();
      if (this.form.valid) {
      const value = this.form.value
      const valueEmail = value.email
      const valuePass = value.password
      if(valueEmail && valuePass){
        this.authService.login(valueEmail, valuePass)
        .then(() => {
          this.router.navigate(['/admin']);
        })
        .catch(() => {
          this.loginError = true
        });
        }
      }
    }

}
