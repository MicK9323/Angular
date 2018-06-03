import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// importar la clase router

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit() {
  }

  buscarHeroe( texto: string ) {
    if ( texto !== '' ) {
      this._router.navigate( ['/busqueda', texto] );
      console.log(texto);
    } else {
      alert('No ah ingresado un término de busqueda!');
    }
  }

}
