import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  public url = 'http://localhost/paises/index.php/';

  constructor(
    public _http: Http
  ) { }

  getAllItems() {
    return this._http.get(this.url + 'all').pipe(map(res => res.json()));
  }
}
