import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RegistroActividadComponent } from './registro-actividad/registro-actividad.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { ReporteActividadesComponent } from './reporte-actividades/reporte-actividades.component';
import { BusquedaActividadesComponent } from './busqueda-actividades/busqueda-actividades.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ComunesModule } from '../comunes/comunes.module';



@NgModule({
  declarations: [
    DashboardComponent,
    RegistroActividadComponent,
    HomeDashboardComponent,
    ReporteActividadesComponent,
    BusquedaActividadesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComunesModule,
  ],
  exports: [
    ComunesModule,
  ]
})
export class DashboardModule { }
