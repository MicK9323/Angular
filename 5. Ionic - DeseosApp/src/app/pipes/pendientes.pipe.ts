import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/lista';


@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform( listas: Lista[], estado: boolean = false ): Lista[] {

    let newList: Lista[] = [];

    for( let lista of listas ){
      if( lista.listaCompleted == estado ){
        newList.push( lista );
      }
    }

    return newList;
  }
}
