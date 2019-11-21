import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { StoreDevtoolsModule } from '@ngrx/store‐devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

import { UsuariosMasterComponent } from './components/usuarios-master/usuarios-master.component';
import { UsuariosDetalleComponent } from './components/usuarios-detalle/usuarios-detalle.component';
import { UsuariosListadoComponent } from './components/usuarios-listado/usuarios-listado.component';
import { UsuariosAltaComponent } from './components/usuarios-alta/usuarios-alta.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { UserEffects } from './reducers/user.effects';

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
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([UserEffects])

    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    // StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
