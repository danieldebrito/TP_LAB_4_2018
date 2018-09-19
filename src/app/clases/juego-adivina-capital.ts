import { Juego } from './juego';

export class JuegoCapital extends Juego {

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Adivina La Capital', gano, jugador);
  }


  public verificar() {
    if (true) {  // condicion
      this.gano = true;
    }

    if (this.gano) {
      return true;

    } else {
      return false;
    }
  }





}
