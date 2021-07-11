import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { AutenticacionModule } from './layout/autenticacion/autenticacion.module';
import { ComunesModule } from './layout/comunes/comunes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialImportModule } from './material-import';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    AutenticacionModule,
    ComunesModule,
    NgbModule,
    MaterialImportModule,

  ],
  providers: [],
  exports: [
    MaterialImportModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
