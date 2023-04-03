import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utils/validators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true //esto es para ocultar la contraseña
  hide2 = true //esto es para ocultar la contraseña

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
  }

form = new FormGroup({
  email : new FormControl('',[Validators.required, Validators.email]), //de esta forma podemos declarar los FormControl de forma más ordenada, dentro de un FormGroup
  password : new FormControl('',[Validators.required, MyValidators.validPassword]),
  confirmPassword : new FormControl('',[Validators.required]),
  },{
    validators: [MyValidators.equalPasswords]  //!Validación personalizada
  })

  ngOnInit(): void {
    // si queremos ver el valor en tiempo real en lugar de usando un boton nos subscribimos a la variable usando la funcion
    // valueChanges
    // this.form.get('email')?.valueChanges.subscribe(value =>{console.log(value)})
    this.form.valueChanges.subscribe(value =>{console.log(value)}) //!esto no escucha 1 elemento especifico si no todo el formulario

  }

  onSubmit() {

    console.log('form: ',this.form.value);

    if(this.form.valid){
      const value = this.form.value
      const valueEmail = value.email
      const valuePass = value.password
      if (valueEmail && valuePass)
      this.authService.createUser(valueEmail, valuePass)
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

get emailField() {
  return this.form.get('email');
}
get passwordField() {
  return this.form.get('password');
}
get confirmPasswordField() {
  return this.form.get('confirmPassword');
}

getErrorMessage(){
  return 'Este campo es requerido'
}
getPasswordParams(){
  return 'La contraseña debe contener: 1 numero, 1 mayuscula, sin espacios, 1 caracter especial'
}
}
