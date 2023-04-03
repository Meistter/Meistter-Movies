import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true //esto es para ocultar la contraseña

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
    onSubmit(){
      console.log('form: ',this.form.value);
    }
}
