import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaActividadesComponent } from './layout/dashboard/busqueda-actividades/busqueda-actividades.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeDashboardComponent } from './layout/dashboard/home-dashboard/home-dashboard.component';
import { RegistroActividadComponent } from './layout/dashboard/registro-actividad/registro-actividad.component';
import { ReporteActividadesComponent } from './layout/dashboard/reporte-actividades/reporte-actividades.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: DashboardComponent,
    children: [
      {path: '', component: HomeDashboardComponent, pathMatch: 'full'},
      {path: 'busqueda-actividad', component: BusquedaActividadesComponent},
      {path: 'registro-actividad', component: RegistroActividadComponent},
      {path: 'reporte-actividad', component: ReporteActividadesComponent},
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
