import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-preferencias-cliente',
  templateUrl: './preferencias-cliente.component.html',
  styleUrls: ['./preferencias-cliente.component.scss']
})
export class PreferenciasClienteComponent {
  options = [
    { name: 'Expedicion', image: 'https://w7.pngwing.com/pngs/663/739/png-transparent-mcleod-ganj-dharamshala-naddi-tibet-dhauladhar-hiking-miscellaneous-cartoon-fictional-character-thumbnail.png', selected: false },
    { name: 'Cabalgata', image: 'https://st2.depositphotos.com/1763191/9793/v/600/depositphotos_97934432-stock-illustration-man-riding-horse-alone.jpg', selected: false },
    { name: 'Rafting', image: 'https://c8.alamy.com/compes/t5ajg1/concepto-de-rafting-de-fondo-ilustracion-de-dibujos-animados-de-rafting-concepto-vector-fondo-para-diseno-web-t5ajg1.jpg', selected: false },
    { name: 'Buceo', image: 'https://st.depositphotos.com/1336457/2949/v/600/depositphotos_29491941-stock-illustration-scuba-diver-and-coral-reef.jpg', selected: false },
    { name: 'Ciclismo', image: 'https://img.freepik.com/vector-premium/personaje-dibujos-animados-nino-ciclista_49924-215.jpg', selected: false },
    { name: 'Andinismo', image: 'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX32297425.jpg', selected: false },
  ];
  
  selectedOptions: string[] = [];
  
  selectedIdCliente: number = 0;
  clienteIds: number[] = [1, 2, 3, 4, 5, 6, 7];
  
  constructor(private http: HttpClient, private router: Router) {}
  
  resetCheckboxes() {
    this.options.forEach(option => {
      option.selected = false;
    });
  }
  

  updateSelection(option: any) {
    const firstOptionString = option.selected ? option.name : '';
    const cliente = {
      nombre: firstOptionString,
      idPreferencia_Cliente: this.selectedIdCliente
    };
  
    if (option.selected) {
      this.selectedOptions.push(option.name);
      console.log(cliente);
  
      this.http.post<any>('https://localhost:44380/api/Cliente/preferencia/insertar', {
        idPreferencia_Cliente: cliente.idPreferencia_Cliente,
        nombre: firstOptionString
      }).subscribe(
        (response) => {
          console.log('Se ingresó correctamente');
          location.reload(); 
        },
        (error) => {
          console.log('No se pudo ingresar');
        }
      );
    } else {
      const index = this.selectedOptions.indexOf(option.name);
      if (index !== -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
  }
  
  save() {
    console.log(this.selectedOptions);
  }
  
}
