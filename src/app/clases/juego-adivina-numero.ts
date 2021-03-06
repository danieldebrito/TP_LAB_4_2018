import { Juego } from './juego';

export class JuegoAdivinaNumero extends Juego {
  numeroSecreto: Number = 0;
  numeroIngresado = 0;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Adivina el número', gano, jugador);
  }

  public verificar() {
    // tslint:disable-next-line:triple-equals
    if (this.numeroIngresado == this.numeroSecreto) {
      this.gano = true;
    }

    if (this.gano) {
      return true;

    } else {
      return false;
    }
  }

  public generarnumero() {

    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);

    console.log('numero Secreto:' + this.numeroSecreto);

    this.gano = false;
  }

  public retornarAyuda() {
    if (this.numeroIngresado < this.numeroSecreto) {
      return 'Falta';
    }

    return 'Te pasate';
  }
}
