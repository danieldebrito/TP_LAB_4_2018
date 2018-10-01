import { Component, OnInit } from '@angular/core';
import { PaisesTodosService } from '../../../services/paises-todos.service';

@Component({
  selector: 'app-mostrar-paises',
  templateUrl: './mostrar-paises.component.html',
  styleUrls: ['./mostrar-paises.component.css']
})
export class MostrarPaisesComponent implements OnInit {

  public listado: Array<any>;
  miServicioDePaises: PaisesTodosService  ;

  constructor(servicioPaises: PaisesTodosService) {
    this.miServicioDePaises = servicioPaises;
  }

  ngOnInit() {
    this.miServicioDePaises.listar()
      .then(datos => {
        console.log('listado de paises', datos);
        this.listado = datos;
      });
  }
}
