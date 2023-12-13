import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaje } from '../../dashboard/models/viaje';
import { ViajeService } from '../../dashboard/services/viaje.service';
import { LoginService } from '../../login/services/login.service';
import { User } from '../../login/model/Usuario';
import { LoginClienteComponent } from '../../login-cliente/login-cliente.component';
import { HomeService } from '../home.service';
import { ServicesService } from '../../login-cliente/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  viaje: Viaje = new Viaje();
  datatable:any = [];

  
  userLoginOn:boolean = false;
  
  userData?:User;

  vistaVer:boolean = true;
  
  constructor(private viajeService: ViajeService, private loginService:LoginService, private homS:HomeService,
    private dataService:ServicesService) {}

  

  ngOnInit():void {
     this.vistaVer = this.homS.vistaHeader ;
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
