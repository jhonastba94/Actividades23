import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MensajeComponent } from './mensaje/mensaje.component';

//Material Design
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ComponentesComponent } from './componentes/componentes.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OperacionesComponent } from './operaciones/operaciones.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TablaComponent } from './tabla/tabla.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent,
    MensajeComponent,
    ComponentesComponent,
    OperacionesComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
     //Material Design
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTableModule

  ],
  exports:[
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent,
    MensajeComponent,
    MatInputModule,
    ComponentesComponent,
    OperacionesComponent,
    TablaComponent
  ]
})
export class PrincipalModule { }
