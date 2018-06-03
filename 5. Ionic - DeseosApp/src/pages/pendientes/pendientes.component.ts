import { DetalleComponent } from './../detalle/detalle.component';
import { Component, OnInit } from '@angular/core';
import { PendientesService } from '../../app/services/lista-pendientes.service';
import { NavController, NavParams } from 'ionic-angular';
import { AgregarComponent } from './../agregar/agregar.component';


@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesComponent implements OnInit {
  constructor( public _listaPendientes: PendientesService,
               private _navController: NavController,
               private _navParams: NavParams ) { }

  ngOnInit() { }

  toAgregar(){
    this._navController.push( AgregarComponent );
  }

  verDetalle(lista, idx){
    this._navController.push( DetalleComponent, {lista, idx} );
  }

}
