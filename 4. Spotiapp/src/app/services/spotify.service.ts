import { Injectable } from '@angular/core';
// Librerias para poder manipular las peticiones HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  // Arreglo para almacenar la respuesta Http
  artistas: any[] = [];
  topTracks: any[] = [];
  urlSpotify = 'https://api.spotify.com/v1/';
  token = 'BQCFFYPSyfWwfzwBj0HyESYEG06wkihl_viw81jGL7R79ptvROjsu_2FYzPmv-bz63E71N6AgiQIqikWG8Y';

  constructor(public _httpClient: HttpClient) {
    console.log('Servicio Spotify Listo!');
   }

  // Funcion para obtener la cabecera de autorizacion
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': `Bearer ${ this.token }`
    });
    return headers;
  }

  // Servicio para obtener el resultado de la busqueda de un termino
  getResultado( termino: string ) {
    // URL
    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=10`;
    // Traer las cabeceras de la peticion desde la funcion getheaders.
    let headers = this.getHeaders();
    return this._httpClient.get(url, { headers })
               .map( (resp: any) => {
                 this.artistas = resp.artists.items;
                 return this.artistas;
               });
  }

  // Servicio para obtener los datos de un artista seleccionado mediante su ID
  getArtista( artistID: string ) {
    // URL
    let url = `${ this.urlSpotify }artists/${ artistID }`;
    // Traer las cabeceras de la peticion desde la funcion getheaders.
    let headers = this.getHeaders();

    return this._httpClient.get(url, {headers});
  }

  // Servicio para obtener el top de canciones de un artista
  getTopTrack( artistID: string ) {
    // URL
    let url = `${ this.urlSpotify }artists/${ artistID }/top-tracks?country=PE`;
    // traer las cabeceras
    let headers = this.getHeaders();

    return this._httpClient.get(url, { headers });
  }

}
