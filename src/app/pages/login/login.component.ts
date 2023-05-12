import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { LoginRequest } from './model/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email:['administrador@gmail.com', [Validators.required, Validators.email]],
    password:['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private router:Router, private loginService:LoginService){}

  ngOnInit(): void {

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
        },
        complete: () => {
          console.info("Login completo");
        }
      })
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
  }
  else{
    this.loginForm.markAllAsTouched();
    alert("Error al ingresar datos");
  }
  }
}
