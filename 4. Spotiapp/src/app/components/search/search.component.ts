import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino = '';
  // Injectaremos el servicio de spotify en este componente
  constructor( public _spotify: SpotifyService ) { }

  obtenerBusqueda( termino: string ) {
    if ( termino.length < 1 ) {
      return;
    }else {
      this._spotify.getResultado(termino).subscribe();
    }
  }

}
