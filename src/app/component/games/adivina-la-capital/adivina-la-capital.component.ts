import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoAdivinaNumero } from '../../../clases/juego-adivina-numero';
import { PaisesTodosService } from '../../../services/paises-todos.service';


@Component({
  selector: 'app-adivina-la-capital',
  templateUrl: './adivina-la-capital.component.html',
  styleUrls: ['./adivina-la-capital.component.css']
})
export class AdivinaLaCapitalComponent implements OnInit {

  public listado = [];
  public opciones = [];
  public correcto: any;
  public elegida: any;

  miServicioDePaises: PaisesTodosService  ;

  constructor(servicioPaises: PaisesTodosService) {
    this.miServicioDePaises = servicioPaises;
  }

verificar(eleg: any) {
  if (eleg === this.correcto) {
    return true;
  }
    return false;
}


  ngOnInit() {
    this.miServicioDePaises.listar()
      .then(datos => {
        console.log('listado de paises', datos);
        this.listado = datos;

        for (let i = 0; i < 4 ; i++) {
          this.opciones.push(this.listado[Math.floor(Math.random() * (this.listado.length))]);
        }
  
        this.correcto = this.opciones[Math.floor(Math.random() * (4))];
      });



  }
}
