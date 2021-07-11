import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialImportModule } from '../../material-import';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MaterialImportModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
  ]
})
export class ComunesModule { }
