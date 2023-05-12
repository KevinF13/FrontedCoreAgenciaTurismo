import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaje } from '../../dashboard/models/viaje';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) {}

  url:string = 'https://localhost:44380/api/Viaje';

  getViaje(){
    return this.http.get(this.url);
  }
  addViaje(viaje:Viaje):Observable<Viaje>{
    return this.http.post<Viaje>(this.url, viaje);
  }

  updateViaje(id:number, viaje:Viaje):Observable<Viaje>{
    return this.http.put<Viaje>(this.url + `/${id}`, viaje);
  }

  deleteViaje(id:number){
    return this.http.delete<Viaje>(this.url + `/${id}`);
  }
}
