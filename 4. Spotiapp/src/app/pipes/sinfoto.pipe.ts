import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform( imagenesArray: any[], tipo: number ): any {
    let noimage = 'assets/img/noimage.png';

    if ( !imagenesArray ) {
      return noimage;
    }
    // Comprueba si el arreglo de imagenes contiene mas de un elemento y devuelve la url
    // del segundo indice si no encuentra un elemento en ese indice retorna la ruta por
    // por defecto noimage
    if ( tipo === 1 ) {
      return ( imagenesArray.length > 0 ) ? imagenesArray[1].url : noimage ;
    }else if ( tipo === 2 ) {
      return ( imagenesArray.length > 0 ) ? imagenesArray[2].url : noimage ;
    }else {
      return noimage;
    }
  }

}
