import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor(private http:HttpClient) {}

  url:string = 'https://localhost:44380/api/Viaje';

  getViaje(){
    return this.http.get(this.url);
  }
  addViaje(viaje:Viaje):Observable<Viaje>{
    return this.http.post<Viaje>(this.url + `/insertar`, viaje);
  }

  updateViaje(id:number, viaje:Viaje):Observable<Viaje>{
    return this.http.put<Viaje>(this.url + `/actualizar` + `/${id}`, viaje);
  }

  deleteViaje(id:number){
    return this.http.delete<Viaje>(this.url + `/eliminar` + `/${id}`);
  }
}
