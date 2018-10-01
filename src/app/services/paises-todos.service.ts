import { Injectable } from '@angular/core';
import { HttpService } from './HTTP/http.service';

@Injectable({
  providedIn: 'root'
})
export class PaisesTodosService {

  constructor(public miHttp: HttpService) { }


  public listar(): Promise<Array<any>> {
    return this.miHttp.httpGetP('all')
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  }
}
