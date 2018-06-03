import { PendientesService } from './../../app/services/lista-pendientes.service';
import { ListaItem } from './../../app/clases/lista-item';
import { Lista } from './../../app/clases/lista';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: Lista;

  constructor( public _navController: NavController,
               public _navParams: NavParams,
               public _alertCtrl: AlertController,
               private _PendientesService: PendientesService ) {
                 this.lista = this._navParams.get("lista");
                 this.idx = this._navParams.get("idx");
                }

  ngOnInit() { }

  actualizar(item: ListaItem){
    item.itemFinished = !item.itemFinished;
    let completado = true;
    for( let item of this.lista.items ){
      if( item.itemFinished == false ){
        completado = false;
        break;
      }
    }
    this.lista.listaCompleted = completado;
    this._PendientesService.actualizarData();
  }

  eliminarLista(){

    let confirmar = this._alertCtrl.create({
      title: `Eliminar la lista "${ this.lista.listaNombre }"?`,
      buttons:[
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          handler: () => { this._PendientesService.eliminarData(this.idx) }
        }
      ]
    });
    confirmar.present();
    this._navController.pop();

  }

}
