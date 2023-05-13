import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { LoginRequest } from './model/loginRequest';
import { BehaviorSubject } from 'rxjs';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  correo: string = '';
  contrasena: string= '';
  showAlert: boolean = false;
  showSuccessAlert: boolean = false;
  isLoggedIn: boolean = false;

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loginError: string = '';
  loginForm = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private router:Router, private loginService:LoginService){}



  
  ngOnInit(): void {
    
  }


  loginIn() {
    // Realizar la lógica de inicio de sesión
    
    // Si el inicio de sesión es exitoso, establece la variable isLoggedIn en true
    this.isLoggedIn = true;
  }

  onSubmit() {
    const user = {
      correo: 'administrador@gmail.com',
      contrasena: 'admin'
    };

    if (this.correo === user.correo && this.contrasena === user.contrasena) {
      console.log('Inicio de sesión exitoso');
      this.showSuccessAlert = true;
      this.showAlert = false;
      this.loginIn();
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();

      // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
      console.log('Credenciales inválidas');
      this.showAlert = true;
      this.showSuccessAlert = false;
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  }

  get email(){
    return this.loginForm.controls.email;
  }

  
  get password(){
    return this.loginForm.controls.password;
  }

  login(){
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
}
