import { Component, OnInit } from '@angular/core';
import { PerfilServicesService } from './perfil-services.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent implements OnInit {

  vistaPerfil = false;
  constructor(public perfilS:PerfilServicesService){}

  ngOnInit(): void {
    this.vistaPerfil = this.perfilS.vistaPerfil;
  }

  noVerPerfil() {
    this.perfilS.noVerPerfil();
  }



  
}
