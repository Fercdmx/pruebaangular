import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Usuario} from './usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioComponent implements OnInit {
  ejemplo: Usuario;
  constructor() {
    this.ejemplo = new Usuario();
  }
  mostrar(){
    alert('Nombre: ' + this.ejemplo.nombre + 'Dominio' + this.ejemplo.dominio);
}
  ngOnInit() {
  }
}
