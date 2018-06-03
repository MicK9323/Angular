import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // Para poder usar parametros enviados atraves de nuestra directiva
  // se debe importar el paquete Input al igual que el HostListener no
  // se inyecta en el constructor y se usa como una anotacion poniendo
  // como parametro la directiva que la contiene y se le asigna un alias
  // para poder emplearla como variable
  @Input('appResaltado') color: string;

  constructor( private _elemRef: ElementRef ) {
    console.info('Directiva llamada');
  }

  // El paquete HostListener permite estar pendiente del elemento
  // que tiene incluida a nuestra directiva.
  // Para poder usarlo no se tiene que inyectar en el constructor
  // Simplemente se usa una anotacion como referencia al paquete
  @HostListener('mouseenter') mouseHover() {
    this.resaltar( this.color || 'green' );
    // Podemos emplear || para enviar un valor por defecto
  }

  @HostListener('mouseleave') mouseLeave() {
    this.resaltar( null );
  }

  private resaltar( color: string ) {
    this._elemRef.nativeElement.style.backgroundColor = color;
  }

}
