import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Importamos los componentes que creamos
import { HeaderComponent } from './components/header.component';
import { BodyComponent } from './components/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    // Agregar aca las clases de los componentes importados
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
