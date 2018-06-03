import { Component, OnInit } from '@angular/core';
// Importar esta clase para poder usar los parametros recibidos por url
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from './../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[];
  termino: string;

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private _router: Router
  ) { }

  ngOnInit() {
    // para extraer los parametros enviados podemos usar el mismonombre con el que los
    // definimos en el archivo de rutas.
    this._activatedRoute.params.subscribe( parametros => {
      this.heroes = this._heroesService.buscarHeroes( parametros['texto'] );
      this.termino = parametros['texto'];
      console.log(this.heroes);
     } );
  }

  verHeroe(id: string) {
    console.log(id);
    this._router.navigate( ['/heroe', id] );
  }

}
