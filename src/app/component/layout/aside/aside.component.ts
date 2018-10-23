import { Component, OnInit, ViewChild } from '@angular/core';
import { AdivinaLaCapitalComponent } from '../../games/adivina-la-capital/adivina-la-capital.component';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @ViewChild(AdivinaLaCapitalComponent) hijo: AdivinaLaCapitalComponent;

  reloadHijo() {
    this.hijo.reload();
  }


  constructor() { }

  ngOnInit() {
  }

}
