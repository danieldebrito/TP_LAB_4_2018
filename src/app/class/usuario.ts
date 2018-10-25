export class User {
    constructor(
      public id: number,
      public nombre: string,
      public mail: string,
      public pass: string,
      public tipo: string,
      public avatar: string,
      public puntaje: number
    ) { }
}
