import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Miguel';

  nombre2 = 'miguel angel corteGaNa alvarez';

  arreglo: [number] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pi = Math.PI;

  e = Math.random();

  monto = 1500.25;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverin',
    edad: 500,
    direccion: {
      calle: 'Calle 1',
      casa: '23'
    }
  };

  promesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llego la data'), 4000 );
  });

  fecha = new Date();

  video = 'hwNyr3xArLQ';

  mostrar = true;

}
