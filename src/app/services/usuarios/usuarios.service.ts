import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { User } from '../../class/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  public url = 'http://localhost/usuarios/index.php/';

  constructor(
    public _http: Http
  ) { }

  getAllItems() {
    return this._http.get(this.url + 'all').pipe(map(res => res.json()));
  }

  addUsuario (usuario: User) {
    let json = JSON.stringify(usuario);
    let params = 'json=' + json;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this._http.post(this.url + 'altaUsr', params, {headers: headers}).pipe(map.( res => res.json));
  }
}
