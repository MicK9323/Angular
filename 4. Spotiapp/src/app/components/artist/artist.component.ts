import { SearchComponent } from './../search/search.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  termino = '';
  artist: any = {};
  total = 0;
  toptracks: any[] = [];
  // inyectamos las clases y los servicios que nos permita leer la URL y extraer el
  // ID pasado como parametro en la URL.
  constructor( private activatedRoute: ActivatedRoute,
               public _spotify: SpotifyService,
               public _search: SearchComponent ) { }
  // Esta funcion se ejecuta cuando el componente ya esta inicializado
  ngOnInit() {
    this.activatedRoute.params
        .map( parametros => parametros['artistID'] )
        .subscribe( artistID => {
          console.log( artistID );
          this._spotify.getArtista( artistID )
                       .subscribe( artista => {
                         console.log(artista);
                         this.artist = artista;
                         this.total = this.artist.followers.total;
                        });
          this._spotify.getTopTrack( artistID )
                       .map( (resp: any) => resp.tracks )
                       .subscribe( toptracks => {
                        this.toptracks = toptracks;
                        console.log( this.toptracks );
                       });
         });
  }

  // setBackground( imagenesArray: any ): any {
  //   let noimage = 'assets/img/texturas/bg2.jpg';

  //   if ( !imagenesArray ) {
  //     return noimage;
  //   }
  //   return ( imagenesArray.length > 0 ) ? imagenesArray[0].url : noimage;
  // }
}
