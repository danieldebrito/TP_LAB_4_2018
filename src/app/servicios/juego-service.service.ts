import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego';
import { JuegoAdivinaNumero } from '../clases/juego-adivina-numero';
import { MiHttpService } from './mi-http/mi-http.service';

@Injectable()
export class JuegoServiceService {

  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    this.peticion = this.miHttp.httpGetO('http://localhost:3003');
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }

  public listar(): Array<Juego> {
   this.miHttp.httpGetP('https://restcountries.eu/rest/v2/all')
    .then( data => {
      console.log( data );
    })
    .catch( err => {
      console.log( err );
    });
   
  
    this.peticion
    .subscribe( data => {
      console.log('En listar');
      console.log( data );
    }, err => {
      console.log('error: ' , err );
    })

    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivinaNumero('Juego 1', false));
    miArray.push(new JuegoAdivinaNumero('Pepe', true));
    miArray.push(new JuegoAdivinaNumero('Juego 3', false));
    miArray.push(new JuegoAdivinaNumero('Juego 4', false));
    miArray.push(new JuegoAdivinaNumero('Juego 5', false));
    miArray.push(new JuegoAdivinaNumero('Juego 6', false));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    this.peticion
    .subscribe( data => {
      console.log("En listarPromesa");
      console.log( data );
    }, err => {
      console.log( err );
    })
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivinaNumero("JuegoPromesa 1", false,"promesa"));
      miArray.push(new JuegoAdivinaNumero("PepePromesa", true));
      miArray.push(new JuegoAdivinaNumero("JuegoPromesa 3", false));
      miArray.push(new JuegoAdivinaNumero("JuegoPromesa 4", false));
      miArray.push(new JuegoAdivinaNumero("JuegoPromesa 5", false));
      miArray.push(new JuegoAdivinaNumero("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }

}
