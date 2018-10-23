import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../../services/paises/api-http.service';
import { Pais } from '../../../class/pais';

@Component({
  selector: 'app-adivina-la-capital',
  templateUrl: './adivina-la-capital.component.html',
  styleUrls: ['./adivina-la-capital.component.css']
})
export class AdivinaLaCapitalComponent implements OnInit {

  public nombreJuego = 'Adivina la Capital';
  public items: Pais[];
  public opciones = [];
  public correcto: Pais;
  public elegida: Pais;
  public msg: string;

  constructor(
    private _allItemsService: ApiHttpService
  ) { }

  verificar(eleg: Pais) {
    if (eleg === this.correcto) {
      this.msg = 'GANASTE !!, Correcto es  ' + this.correcto.capital;
    } else {
      this.msg = 'PERDISTE !!, es:  ' + this.correcto.capital;
    }
  }

  reload() {
    this._allItemsService.getAllItems().subscribe(
      result => {
        if (result.code !== 200) {
          console.log(result);
        } else {  // si no hay error
          this.items = result.data;

          this.opciones = [];
          this.msg = '';

          for (let i = 0; i < 4; i++) {
            this.opciones.push(this.items[Math.floor(Math.random() * (this.items.length))]);
          }

          this.correcto = this.opciones[Math.floor(Math.random() * (4))];
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
    this.reload();
  }
}
