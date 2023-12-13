import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, catchError, throwError } from 'rxjs';
import { User } from '../login/model/Usuario';
import { LoginRequest } from '../login/model/loginRequest';
import { HomeComponent } from '../home/home/home.component';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { PerfilServicesService } from '../perfil-cliente/perfil-services.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({ id: 0, email: '' });

  constructor(private http: HttpClient) { }


  login(credentials: LoginRequest): Observable<User> {
    return this.http.post<User>('https://localhost:44380/api/Auth/login', credentials).pipe(
      tap((userData: User) => {
        console.log(credentials);
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    );
  }
  

  private handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      console.error('Se ha producido un error', error.error);
    } else {
      console.error('Backend retornó el código de estado', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Inténtelo nuevamente'));
  }

  get userData(): Observable<User> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }
}
