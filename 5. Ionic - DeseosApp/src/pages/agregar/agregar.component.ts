import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/export';
import { AlertController, NavController } from 'ionic-angular';
import { PendientesService } from './../../app/services/lista-pendientes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {

  nombreLista: string = "";
  nombreItem: string = "";
  items: ListaItem[] = [];

  constructor( public alert: AlertController,
               public _NavController: NavController,
               public _PendientesServices: PendientesService ) { }

  ngOnInit() { }

  agregar() {
    if( this.nombreItem.length == 0 ) {
      return;
    }

    let item = new ListaItem( this.nombreItem );
    this.items.push( item );
    this.nombreItem = "";
  }

  eliminarItem( index: number ) {
    let confirmar = this.alert.create({
      title: 'Esta Seguro?',
      message: 'Se eliminará este item',
      buttons: [
        {
          text: 'No',
          handler: () => { console.log('Eliminacion cancelada'); }
        },
        {
          text: 'Si',
          handler: () => {
            this.items.splice(index, 1);
          }
        }
      ]
    });
    confirmar.present();
  }

  guardarLista() {

    if( this.nombreLista.length == 0 ){
      let alerta = this.alert.create({
        title: 'Titulo Vacio!',
        subTitle: 'Necesita ingresar un titulo antes de guardar la lista',
        buttons: ['OK']
      });
      alerta.present();
    }else {
      let newList = new Lista( this.nombreLista );
      newList.items = this.items;
      this._PendientesServices.agregarData(newList);
      this._NavController.pop();
    }
  }

}
