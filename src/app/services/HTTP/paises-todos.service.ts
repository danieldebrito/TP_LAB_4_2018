import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PaisesTodosService {

  constructor(public miHttp: HttpService) { }


  public listar(): Promise<Array<any>> {
    return this.miHttp.httpGetP('all')
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  }
}
