import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../class/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public url = 'http://localhost/usuarios/index.php/';

  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(this.url + 'all');
  }

  add(usuario: User): Observable<any> {
    const json = JSON.stringify(usuario);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.url + 'add', params, { headers: headers });
  }

  uploadFile (url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for ( let i = 0; i < files.length ; i++) {
        formData.append('uploads[]', files[i], files[i].name);
      }

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject( xhr.response );
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}
