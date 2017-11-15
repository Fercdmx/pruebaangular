import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Usuario} from './usuario';
import {UsuarioService} from '../servicios/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  ejemplo: Usuario;
  constructor(private usuarioServicio: UsuarioService) {
  }

  ngOnInit() {
      this.ejemplo = new Usuario();
  }
  mostrar() {
       this.usuarioServicio.addUsuario(this.ejemplo).subscribe((respuesta) => {
         console.log(respuesta);
       });
  }
}
