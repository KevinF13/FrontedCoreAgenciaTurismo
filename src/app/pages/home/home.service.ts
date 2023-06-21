import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  vistaHeader:boolean = true;
  constructor() { }

  loginIn() {
    // Realizar la lógica de inicio de sesión
    
    // Si el inicio de sesión es exitoso, establece la variable isLoggedIn en true
    this.vistaHeader = false;
  }
}
