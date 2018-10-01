import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public ruta: string;

  constructor(public http: Http) {
    this.ruta = 'https://restcountries.eu/rest/v2/';
  }

  public httpGetP(url: string) {
    return this.http
      .get(this.ruta + url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    return this.http
      .get(url)
      .subscribe(data => {
        console.log(data);
        return data;
      });
  }

  public httpGetO(url: string): Observable<Response> {
    return this.http.get(url)
      .pipe(map((res: Response) => res.json()))
      .pipe(catchError((err: any) => Observable.throw(err.json().error || 'Server error')));
  }


  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }
}
