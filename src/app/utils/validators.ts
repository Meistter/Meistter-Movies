import { AbstractControl } from '@angular/forms';
import { map} from 'rxjs/operators'
export class MyValidators {


  static equalPasswords(control: AbstractControl){
    const password = control.get('password')?.value //aqui estamos opteniendo todo el formulario en control, entonces seleccionamos a password especificamente
    const confirmPassword = control.get('confirmPassword')?.value

    if(password === confirmPassword){
      return null //retornar nulo significa q no hay error
    }
    return {match_password: true} //este match_password es lo q usaremos para validar del otro lado

  }
  static validPassword(control: AbstractControl){
    const value = control.value

    //Estamos validando usando una expresion regular, la validacion es:
    //Minimo 5 Digitos, maximo 20, sin expacios, minimo 1 numero, minimo 1 mayuscula, minimo 1 caracter especial
    const formato = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{5,20}$/

    if(formato.test(value)){
      return null
    } else {
      return {invalid_password: true}
  }

}
// function containsNumber(value: string): boolean {
//   return value.split('').some(isNumber);
// }
// function isNumber(value: string){
//   return !isNaN(parseInt(value,10))
}
