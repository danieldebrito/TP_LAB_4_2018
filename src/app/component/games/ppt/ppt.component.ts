import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  public nombreJuego = 'Piedra, Papel o Tijera';


  constructor() { }

  verificar() { }

  reload() { }

  ngOnInit() {
    this.reload();
  }
}
