import { DetalleComponent } from './../detalle/detalle.component';
import { Component, OnInit } from '@angular/core';
import { PendientesService } from '../../app/services/lista-pendientes.service';
import { NavController, NavParams } from 'ionic-angular';
import { AgregarComponent } from './../agregar/agregar.component';


@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosComponent implements OnInit {
  constructor( public _listaPendientes: PendientesService,
               private _navController: NavController,
               private _navParams: NavParams ) { }

  ngOnInit() { }

  verDetalle(lista, idx){
    this._navController.push( DetalleComponent, {lista, idx} );
  }

}
