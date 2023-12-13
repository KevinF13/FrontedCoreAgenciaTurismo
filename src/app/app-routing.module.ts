import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { RegistroClienteComponent } from './pages/registro-cliente/registro-cliente/registro-cliente.component';
import { PreferenciasClienteComponent } from './pages/preferencias-cliente/preferencias-cliente.component';
import { PerfilClienteComponent } from './pages/perfil-cliente/perfil-cliente.component';
import { ViajesPersonalizadosComponent } from './pages/viajes-personalizados/viajes-personalizados.component';


const routes: Routes = [
 //path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: 'inicio', component : DashboardComponent},
 {path: 'login', component: LoginComponent},
 {path: 'loginCliente', component: LoginClienteComponent},
 {path: 'registroCliente', component: RegistroClienteComponent},
 {path: 'preferenciaCliente', component: PreferenciasClienteComponent},
 {path: 'viajesCliente', component: ViajesPersonalizadosComponent},
 {path: 'perfilCliente', component: PerfilClienteComponent},
 {path: 'home', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
