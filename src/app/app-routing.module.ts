import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { NavbarComponent } from './inicio/navbar/navbar.component';
import { PresentacionComponent } from './inicio/presentacion/presentacion.component';

const routes: Routes = [
  { path: '', redirectTo:'presentacion', pathMatch:'full'},
  { path: 'navbar', component: NavbarComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
