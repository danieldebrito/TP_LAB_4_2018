import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsuariosService } from '../../../../services/usuarios/usuarios.service';
import { User } from '../../../../class/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: User;

  constructor() {
    this.usuario = new User(0, '', '', '', '', '');
  }

  onSubmit() {
    console.log(this.usuario);
  }




  ngOnInit() {
  }

}
