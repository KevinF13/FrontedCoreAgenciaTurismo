import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent {
  showSuccessAlert = false;
  showAlert = false;

  registro = this.formBuilder.group({
    nombre:['', [Validators.required]],
    apellido:['', Validators.required],
    cedula:['', Validators.required],
    celular:['', Validators.required],
    direccion:['', Validators.required],
    correo:['', [Validators.required, Validators.email]],
    contrasena:['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private http: HttpClient,  private router:Router) {}


  registroCliente() {
    // Realizar la llamada a la API en C#

    let nombre: any  = this.registro.value.nombre
    let apellido: any  = this.registro.value.apellido
    let cedula: any  = this.registro.value.cedula
    let celular: any  = this.registro.value.celular
    let direccion: any  = this.registro.value.direccion
    let correo: any  = this.registro.value.correo
    let contrasena: any  = this.registro.value.contrasena

    console.log({
      nombre:nombre, 
      apellido:apellido,
      cedula:cedula,
      celular:celular,
      direccion:direccion,
      email:correo,
      contrasena:contrasena});

    this.http.post('https://localhost:44380/api/Cliente/insertar', {
      nombre:nombre, 
      apellido:apellido,
      cedula:cedula,
      celular:celular,
      direccion:direccion,
      email:correo,
      contrasena:contrasena})
      .subscribe((response) => {
        // Aquí puedes manejar la respuesta de la API, como almacenar el token de autenticación, redireccionar, etc.
        this.showSuccessAlert = true;
        this.showAlert = false;
        this.router.navigateByUrl('/home');
        this.registro.reset();
        console.log(response);
      }, (error) => {
        // Manejo de errores
        console.log('No se pudo registrar :(');
        this.showAlert = true;
        this.showSuccessAlert = false;
        console.error(error);
      });
  }

  get nombre(){
    return this.registro.controls.nombre;
  }
  get apellido(){
    return this.registro.controls.apellido;
  }
  get cedula(){
    return this.registro.controls.cedula;
  }
  get celular(){
    return this.registro.controls.celular;
  }
  get direccion(){
    return this.registro.controls.direccion;
  }
  get contrasena(){
    return this.registro.controls.contrasena;
  }
  get correo(){
    return this.registro.controls.correo;
  }
}
