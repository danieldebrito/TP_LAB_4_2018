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

  public filesToUpload;
  public resultUpload;

  constructor(
    private _service: UsuariosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.usuario = new User(0, '', '', '', '', '', 0);
  }

  onSubmit() {
    console.log(this.usuario);

    this._service.uploadFile(this._service.url + 'upload-file', [], this.filesToUpload).then((result) => {
      console.log(result);
      this.usuario.avatar = 'poner el filename, ver!!!!!!!!';

    }, (error) => {
      console.log( error );
    });

    this._service.add(this.usuario).subscribe(
      response => {
        if ( response.code === 200 ) {
          this._router.navigate(['/home']);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  } // onSubmit end ----------------------

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);


  } // fileChangeEvent --------------------


  ngOnInit() {
  }

}
