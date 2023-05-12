import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/pages/login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLoginOn:boolean = true;

  constructor(private loginService: LoginService){}

  ngOnInit() {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn=userLoginOn;

      }
    })
    
  }
}
