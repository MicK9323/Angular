import { Component, OnInit } from '@angular/core';
// Importar esta clase para poder usar los parametros recibidos por url
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  // Instanciamos un objeto para alamacenar la data del heroe que nos devuelva
  // el metodo "getHeroe"
  heroe: Heroe = null;

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
  ) {
    // para extraer los parametros enviados podemos usar el mismonombre con el que los
    // definimos en el archivo de rutas.
    this._activatedRoute.params.subscribe( parametros => {
        this.heroe = this._heroesService.getHeroe( parametros['id'] );
        console.log(this.heroe);
     } );
   }

  ngOnInit() {
  }

}
