import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoAdivinaNumero } from '../../../clases/juego-adivina-numero';


@Component({
  selector: 'app-adivina-la-capital',
  templateUrl: './adivina-la-capital.component.html',
  styleUrls: ['./adivina-la-capital.component.css']
})
export class AdivinaLaCapitalComponent implements OnInit { 
  @Output() enviarJuego: EventEmitter <any> = new EventEmitter<any>();

  nuevoJuego: JuegoAdivinaNumero;
  Mensajes: string;
  contador: number;
  ocultarVerificar: boolean;

  constructor() {
    this.nuevoJuego = new JuegoAdivinaNumero();
    console.log('numero Secreto:', this.nuevoJuego.numeroSecreto);
    this.ocultarVerificar = false;
  }
  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.contador = 0;
  }

  verificar() {
    this.contador++;
    this.ocultarVerificar = true;

    console.log('numero Secreto: ' + this.nuevoJuego.gano);

    if (this.nuevoJuego.verificar()) {
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje('Sos un Genio!!!', true);
      this.nuevoJuego.numeroSecreto = 0;
    } else {
       let mensaje: string;

      switch (this.contador) {
        case 1:
          mensaje = 'No, intento fallido, animo';
          break;
          case 2:
          mensaje = 'No,Te estaras Acercando???';
          break;
          case 3:
          mensaje = 'No es, Yo crei que la tercera era la vencida';
          break;
          case 4:
          mensaje = 'No era el ' + this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje = this.contador + ' intentos y nada';
          break;
          case 6:
          mensaje = 'Afortunado en el amor';
          break;
        default:
            mensaje = 'Ya le erraste ' + this.contador + ' veces';
          break;
      }
      this.MostarMensaje( '#' + this.contador + ' ' + mensaje + ' ayuda :' + this.nuevoJuego.retornarAyuda());
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
      modelo.ocultarVerificar = false;
     }, 3000);

     console.log('objeto', x);
   }

  ngOnInit() {
  }
}
