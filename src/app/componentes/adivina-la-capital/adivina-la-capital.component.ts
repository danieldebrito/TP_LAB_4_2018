import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { JuegoAdivinaCapital } from '../../clases/juego-adivina-capital';


@Component({
  selector: 'app-adivina-la-capital',
  templateUrl: './adivina-la-capital.component.html',
  styleUrls: ['./adivina-la-capital.component.css']
})
export class AdivinaLaCapitalComponent implements OnInit {
  @Output() enviarJuego: EventEmitter <any> = new EventEmitter<any>();

  nuevoJuego: JuegoAdivinaCapital;
  Mensajes: string;
  public listadoDePaises: Array<any>;

  constructor() {
    this.nuevoJuego = new JuegoAdivinaCapital();
    console.log('opcion correcta:', this.nuevoJuego.opcionCorrecta);
  }

  generarnumero() {
    this.nuevoJuego.generarOpcion();
  }

  verificar() {

    if (this.nuevoJuego.verificar()) {
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje('¡GANASTE!', true);
    } else {
       // tslint:disable-next-line:prefer-const
       let mensaje: string;

      this.MostarMensaje('¡PERDISTE!');
    }
    console.log('numero Secreto:', this.nuevoJuego.gano);
  }


  MostarMensaje(mensaje: string = 'este es el mensaje', ganador: boolean = false) {
    this.Mensajes = mensaje;
    // tslint:disable-next-line:prefer-const
    let x = document.getElementById('snackbar');

    if (ganador) {
        x.className = 'show Ganador';
      } else {
        x.className = 'show Perdedor';
      }

    // tslint:disable-next-line:prefer-const
    let modelo = this;

    setTimeout(function() {
      x.className = x.className.replace('show', '');
     }, 3000);

     console.log('objeto', x);
   }



  ngOnInit() {}
}
