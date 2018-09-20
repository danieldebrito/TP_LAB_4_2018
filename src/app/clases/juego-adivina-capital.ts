import { Juego } from './juego';
import { PaisesService } from '../servicios/paises.service';

export class JuegoAdivinaCapital extends Juego {

  opcionCorrecta = 'Ø';
  opcionElegida = 'Ø';
  opciones = [];

  public listadoDePaises: Array<any>;
  miServicioDePaises: PaisesService;

  constructor(nombre?: string, gano?: boolean, jugador?: string, servicioPaises?: PaisesService) {
    super('Adivina La Capital', gano, jugador);
    this.miServicioDePaises = servicioPaises;
  }


  public verificar() {
    // tslint:disable-next-line:triple-equals
    if (this.opcionCorrecta == this.opcionElegida) {
      this.gano = true;
    }

    if (this.gano) {
      return true;

    } else {
      return false;
    }
  }

  public generarOpcion() {

    this.miServicioDePaises.listar()
    .then(datos => {
      // tslint:disable-next-line:no-console
      console.info('listado de paises', datos);
      this.listadoDePaises = datos;
    });

    // tslint:disable-next-line:prefer-const
    let dim = this.listadoDePaises.length;
    for ( let i = 0 ; i < 3 ; i++  ) {
      this.opciones.push(this.listadoDePaises[Math.floor((Math.random() * dim) + 1)]);
    }

    this.opcionCorrecta = '' /*this.opciones[Math.floor((Math.random() * 4) + 1)]*/;
    this.gano = false;
  }
}
