import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {


  public nombreJuego = 'Ta Te Ti';


  constructor() { }

  verificar() { }

  reload() { }

  ngOnInit() {
    this.reload();
  }
}
