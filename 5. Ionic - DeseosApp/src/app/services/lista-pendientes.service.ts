import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';


@Injectable()
export class PendientesService {

  listas: Lista[] = [];

  constructor() {

    // let lista1 = new Lista( 'Lenguajes' );
    // let lista2 = new Lista( 'Videojuegos' );
    // let lista3 = new Lista( 'Cibertec' );

    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);

    // console.log("Servicio inicializado");
    // console.log( this.listas );

    this.cargarData();
  }

  actualizarData() {
    // El local storage solo permite almacenar strings
    localStorage.setItem( "data", JSON.stringify( this.listas ) );
  }

  cargarData(){
    if( localStorage.getItem("data") ){
      this.listas = JSON.parse( localStorage.getItem("data") );
    }
  }

  agregarData(lista: Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

  eliminarData( idx:number ){
    this.listas.splice(idx, 1);
    this.actualizarData();
  }

}
