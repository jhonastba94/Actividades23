import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { ComponentesComponent } from './principal/componentes/componentes.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { LoginComponent } from './principal/login/login.component';
import { MensajeComponent } from './principal/mensaje/mensaje.component';
import { OperacionesComponent } from './principal/operaciones/operaciones.component';
import { TablaComponent } from './principal/tabla/tabla.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent},
  {path: 'formulario', component: FormularioComponent, canActivate: [CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent, canActivate: [CanactivateGuard]},
  {path: 'componente', component: ComponentesComponent, canActivate: [CanactivateGuard]},
  {path: 'operaciones', component: OperacionesComponent, canActivate: [CanactivateGuard]},
  {path: 'tabla', component: TablaComponent, canActivate: [CanactivateGuard]},

  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },

  {path: 'mensaje', component: MensajeComponent, canActivate: [CanactivateGuard], canDeactivate: [CandesactivateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
