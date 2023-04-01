import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true //esto es para ocultar la contraseña


  constructor(private formBuilder: FormBuilder){
  }

form = new FormGroup({
  email : new FormControl('',[Validators.required, Validators.email]), //de esta forma podemos declarar los FormControl de forma más ordenada, dentro de un FormGroup
  password : new FormControl('',[Validators.required]),
  password2 : new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
    // si queremos ver el valor en tiempo real en lugar de usando un boton nos subscribimos a la variable usando la funcion
    // valueChanges
    // this.form.get('email').valueChanges.subscribe(value =>{console.log(value)})
    // this.form.valueChanges.subscribe(value =>{console.log(value)}) //!esto no escucha 1 elemento especifico si no todo el formulario
  }

get emailField() {
  return this.form.get('email');
}
get passwordField() {
  return this.form.get('password');
}
get password2Field() {
  return this.form.get('password2');
}


}
