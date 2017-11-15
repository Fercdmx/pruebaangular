import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsuarioService} from './servicios/usuario.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
