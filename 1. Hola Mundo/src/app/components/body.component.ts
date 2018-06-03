import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  mostrar = false;
  boton: string;
  frase: any = {
    autor: 'Extraido de un momaso',
    mensaje: 'Como dice el dicho: "Si pesa más que un pollo me la follo :v"'
  };
  personajes: string[] = ['Spiderman', 'Black Widow', 'Hulk', 'Capitan America', 'Arrow', 'Thor'];
}
