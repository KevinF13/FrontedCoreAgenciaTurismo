import { Component } from '@angular/core';
import { Viaje } from './models/viaje';
import { ViajeService } from './services/viaje.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  viaje: Viaje = new Viaje();
  datatable:any = [];

  constructor(private viajeService: ViajeService){}

  ngOnInit():void {
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
      this.viaje.id = select.idCliente;
      this.viaje.nombre = select.nombre;
      this.viaje.duracion = select.duracion;
      this.viaje.descripcion = select.descripcion;
      this.viaje.precio = select.precio;
  }

  clear(){
    this.viaje.id = 0;
    this.viaje.nombre = "";
    this.viaje.duracion = 0;
    this.viaje.descripcion = "";
    this.viaje.precio = 0;

  }

}
