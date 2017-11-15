import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Usuario} from '../formulario/usuario';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }
  public addUsuario(usuario: Usuario): Observable<any> {
    return this.http.post('https://private-d3245b-addusuario.apiary-mock.com/addUsuario',
      usuario,
      httpOptions).pipe();
  }
}
