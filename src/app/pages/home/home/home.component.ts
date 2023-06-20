import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaje } from '../../dashboard/models/viaje';
import { ViajeService } from '../../dashboard/services/viaje.service';
import { LoginService } from '../../login/services/login.service';
import { User } from '../../login/model/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  viaje: Viaje = new Viaje();
  datatable:any = [];

  userLoginOn:boolean = false;
  userData?:User;
  
  constructor(private viajeService: ViajeService, private loginService:LoginService) {}

  ngOnInit():void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn)=>{
        this.userLoginOn=userLoginOn;
      }
    });
    this.loginService.currentUserData.subscribe({
      next:(userData)=>{
        this.userData=userData;
      }
    });
    this.OnDataTable();
  }

  OnDataTable(){
    this.viajeService.getViaje().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }
}
