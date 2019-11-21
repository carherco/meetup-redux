import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuariosMasterComponent } from './components/usuarios-master/usuarios-master.component';
import { UsuariosDetalleComponent } from './components/usuarios-detalle/usuarios-detalle.component';
import { UsuariosListadoComponent } from './components/usuarios-listado/usuarios-listado.component';
import { UsuariosAltaComponent } from './components/usuarios-alta/usuarios-alta.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosMasterComponent,
    UsuariosDetalleComponent,
    UsuariosListadoComponent,
    UsuariosAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
