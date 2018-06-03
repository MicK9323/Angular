import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html'
})
export class VistaComponent implements OnInit {

  tamano: number = 10;
  alerta: string = '';
  texto: string = '';
  carga: boolean = false;
  switchAlert: string = '';

  constructor() { }

  ngOnInit() {
  }

  aumentar() {
    if ( this.tamano === 30 ) {
      alert('Tamaño maximo alcanzado');
    } else {
      this.tamano = this.tamano + 1;
      console.log(this.tamano);
    }
  }

  disminuir() {
    if ( this.tamano === 10 ) {
      alert('Tamaño minimo alcanzado');
    } else {
      this.tamano = this.tamano - 1;
      console.log(this.tamano);
    }
  }

  cambiarAlerta( tipo: string ) {
    if ( tipo === 'primary' ) {
      this.alerta = 'alert alert-primary';
    } else if ( tipo === 'secondary' ) {
      this.alerta = 'alert alert-secondary';
    } else if ( tipo === 'success' ) {
      this.alerta = 'alert alert-success';
    } else if ( tipo === 'danger' ) {
      this.alerta = 'alert alert-danger';
    } else if ( tipo === 'warning' ) {
      this.alerta = 'alert alert-warning';
    } else if ( tipo === 'info' ) {
      this.alerta = 'alert alert-info';
    } else if ( tipo === 'light' ) {
      this.alerta = 'alert alert-light';
    } else if ( tipo === 'dark' ) {
      this.alerta = 'alert alert-dark';
    }
    this.texto = tipo;
  }

  guardarCambios() {
    this.carga = true;
    setTimeout( () => this.carga = false, 3000 );
  }

  cambiarAlerta2( tipo: string ) {
    this.switchAlert = tipo;
    console.info(this.switchAlert);
  }

}
