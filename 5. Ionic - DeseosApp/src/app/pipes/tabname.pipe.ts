import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tabname'})
export class TabNamePipe implements PipeTransform {
  transform(value: string, defecto: string): string {
    // Si hay un valor retornara ese valor de lo contrario
    // retornara un ladrillo
    return ( value )? value: defecto;
  }
}
