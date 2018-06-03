import { ListaItem } from './lista-item';


export class Lista{

  listaNombre: string;
  listaCompleted: boolean;
  items: ListaItem[];

  constructor( nombre: string ) {
    this.listaNombre = nombre;
    this.listaCompleted = false;
  }

}
