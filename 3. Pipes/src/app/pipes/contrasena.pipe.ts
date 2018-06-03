import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): string {
    let texto = '';
    if ( mostrar ) {
      return texto = '♦'.repeat(value.length);
    }else {
      return value;
    }
  }

}
