import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambioPassComponent } from './cambio-pass/cambio-pass.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    CambioPassComponent,
    DatosPersonalesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class AutenticacionModule { }
