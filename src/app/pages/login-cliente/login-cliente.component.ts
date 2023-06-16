import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ServicesService } from './services.service';
import { LoginRequest } from '../login/model/loginRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent {
  email: string = '';
  contrasena: string = '';
  showSuccessAlert: boolean = false;
  showAlert: boolean = true;

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loginError: string = '';
  loginForm = this.formBuilder.group({
    correo:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  })
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private loginService:ServicesService,  private router:Router) {}
  


  login() {
    // Realizar la llamada a la API en C#

    console.log('hola prueba');
    
    

    // this.http.post('https://localhost:44380/api/Cliente/login', { email: this.email, contrasena: this.contrasena })
    //   .subscribe((response) => {
    //     // Aquí puedes manejar la respuesta de la API, como almacenar el token de autenticación, redireccionar, etc.
    //     this.showSuccessAlert = true;
    //     this.showAlert = false;
    //     this.loginIn();
    //     this.router.navigateByUrl('/inicio');
    //     this.loginForm.reset();
    //     console.log(response);
    //   }, (error) => {
    //     // Manejo de errores
    //     console.log('Credenciales inválidas');
    //     this.showAlert = true;
    //     this.showSuccessAlert = false;
    //     console.error(error);
    //   });
  }
  
  loginIn() {
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError = errorData;
        },
        complete: () => {
          console.info("Login completo");
        }
      })
      this.router.navigateByUrl('/inicio');
      this.currentUserLoginOn.next(false);
      this.loginForm.reset();
  }
  else{
    this.loginForm.markAllAsTouched();
    alert("Error al ingresar datos");
  }
  }

  get correo(){
    return this.loginForm.controls.correo;
  }

  
  get password(){
    return this.loginForm.controls.password;
  }
}