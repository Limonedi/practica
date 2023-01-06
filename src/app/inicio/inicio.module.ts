import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ContactoComponent,
    NavbarComponent,
    PresentacionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ContactoComponent,
    NavbarComponent,
    PresentacionComponent,
    FooterComponent
  ],
})
export class InicioModule { }
