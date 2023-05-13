import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LoginService } from 'src/app/pages/login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLoginOn:boolean = true;
  isLoggedIn: boolean = false;

  constructor(private loginService: LoginService){}

  ngOnInit() {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn=userLoginOn;

      }
    })
    
  }
  login() {
    // Realizar la lógica de inicio de sesión
    
    // Si el inicio de sesión es exitoso, establece la variable isLoggedIn en true
    this.isLoggedIn = true;
  }

  // Por ejemplo, en el caso de un botón de cierre de sesión, puedes tener una función como esta:
  logout() {
    // Realizar la lógica de cierre de sesión
    
    // Si el cierre de sesión es exitoso, establece la variable isLoggedIn en false
    this.isLoggedIn = false;
  }
}
