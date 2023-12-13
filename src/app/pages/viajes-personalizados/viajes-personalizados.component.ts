import { Component } from '@angular/core';
import { ViajePersonalizadosService } from '../viaje-personalizados.service';
import { Viaje } from '../dashboard/models/viaje';
import { HttpClient } from '@angular/common/http';
import { LoginClienteComponent } from '../login-cliente/login-cliente.component';

@Component({
  selector: 'app-viajes-personalizados',
  templateUrl: './viajes-personalizados.component.html',
  styleUrls: ['./viajes-personalizados.component.scss']
})
export class ViajesPersonalizadosComponent {

  autenticado = false;
  listaPreferencia: string[] = [];
  listaCategoria: string[] = [];
  nombresSimilares: string[] = [];
  listaViajes: Viaje[] = [];
  error = '';
  selectedIdCliente: number = 0;
  clienteIds: number[] = [1, 2, 3, 4, 5, 6, 7];

  constructor(private viajePersonalizado:ViajePersonalizadosService, private http: HttpClient){}


  autenticarUsuario() {
    const cliente = {
      email: 'kfajardo@gmail.com', // Cambiar por el email del cliente
      idCliente: this.selectedIdCliente // Cambiar por el ID del cliente
    };
    this.http.post<any>('https://localhost:44380/api/comparacion', cliente).subscribe(
      (response) => {
        this.autenticado = true;
        this.listaPreferencia = response.listaPreferencia;
        this.listaCategoria = response.listaCategoria;
        this.nombresSimilares = response.nombresSimilares;
        this.listaViajes = response.listaViajes;
        this.error = '';
      },
      (error) => {
        this.autenticado = false;
        this.error = error.error || 'Error en el servidor';
        this.listaPreferencia = [];
        this.listaCategoria = [];
        this.nombresSimilares = [];
        this.listaViajes = [];
      }
    );
  }

}
