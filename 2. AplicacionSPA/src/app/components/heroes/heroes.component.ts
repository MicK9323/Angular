import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
// Importamos la siguiente clase para poder usar los metodos de navegacion
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService, private _router: Router ) {

   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  // Definicion del metodo que usaremos para la redireccion de enlace
  verHeroe(id: string) {
    this._router.navigate( ['/heroe', id] );
  }

}
