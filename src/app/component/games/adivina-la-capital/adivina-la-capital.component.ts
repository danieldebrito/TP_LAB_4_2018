import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../../services/paises/api-http.service';
import { Pais } from '../../../class/pais';

@Component({
  selector: 'app-adivina-la-capital',
  templateUrl: './adivina-la-capital.component.html',
  styleUrls: ['./adivina-la-capital.component.css']
})
export class AdivinaLaCapitalComponent implements OnInit {

  public nombreJuego = 'Adivina Capital';
  public items: Pais[];
  public opciones: Pais[];
  public correcto: Pais;
  public elegida: Pais;

  constructor(
    private _allItemsService: ApiHttpService
  ) { }

verificar() {
}


  ngOnInit() {

    this._allItemsService.getAllItems().subscribe(
      result => {
        if (result.code !== 200) {
          console.log(result);
        } else {  // si no hay error
          this.items = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );

    for (let i = 0; i < 4 ; i++) {
      this.opciones.push(this.items[Math.floor(Math.random() * (this.items.length))]);
    }

    this.correcto = this.opciones[Math.floor(Math.random() * (4))];
  }
}
