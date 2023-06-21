import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilServicesService {

  vistaPerfil:boolean = false;
  constructor() { }

  verPerfil() {
    // Realizar la lógica de inicio de sesión
    
    // Si el inicio de sesión es exitoso, establece la variable isLoggedIn en true
    this.vistaPerfil = true;
  }

  noVerPerfil() {
    this.vistaPerfil = false;
  }

  isAuthenticated(): boolean {
    // Devuelve el estado actual de autenticación
    return this.vistaPerfil;
  }
}
