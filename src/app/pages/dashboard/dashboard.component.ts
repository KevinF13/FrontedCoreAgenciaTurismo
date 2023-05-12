import { Component } from '@angular/core';
import { Viaje } from './models/viaje';
import { ViajeService } from './services/viaje.service';
import { LoginService } from '../login/services/login.service';
import { User } from '../login/model/Usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  viaje: Viaje = new Viaje();
  datatable:any = [];

  userLoginOn:boolean = false;
  userData?:User;

  constructor(private viajeService: ViajeService, private loginService:LoginService){}

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

  onAddViaje(viaje:Viaje):void{
    this.viajeService.addViaje(viaje).subscribe(res => {
      if(res){
        alert(`${viaje.nombre} se ha INGRESADO con exito!`);
        this.clear();
        this.OnDataTable();
      }else{
        alert(`Error! :(`)
      }
    })
  }

  onUpdateViaje(viaje:Viaje): void{
    this.viajeService.updateViaje(viaje.id, viaje).subscribe(res => {
      if(res){
        alert(`${viaje.nombre} se ha ACTUALIZADO con exito!`);
        this.clear();
        this.OnDataTable();
      }else{
        alert(`Error! :(`)
      }
    })
  }

  onDeleteViaje(id:number, viaje:Viaje):void{
    this.viajeService.deleteViaje(id).subscribe(res => {
      if(res){
        alert(`${viaje.nombre} se ha ELMINADO con exito!`);
        this.clear();
        this.OnDataTable();
      }else{
        alert(`Error! :(`)
      }
    })
  }

  onSetData(select:any){
      this.viaje.id = select.idViaje;
      this.viaje.nombre = select.nombre;
      this.viaje.duracion = select.duracion;
      this.viaje.descripcion = select.descripcion;
      this.viaje.precio = select.precio;
      this.viaje.imagen = select.imagen;
  }

  clear(){
    this.viaje.id = 0;
    this.viaje.nombre = "";
    this.viaje.duracion = 0;
    this.viaje.descripcion = "";
    this.viaje.precio = 0;
    this.viaje.imagen = "";

  }

}
