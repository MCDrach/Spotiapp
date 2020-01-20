import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQChhn1EN-oiQ-M0u2C7gJVIsUDMRFBcupXxZVFp9h50ijaBFFGeHvq56lW1kg8vJOdSF47-egfkShcITMk'
    });

    return this.http.get(url, {headers});
  }


  getNewReleases() {
    return this.getQuery('browse/new-releases')
              .pipe(map( (data: any) => data.albums.items));

  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe(map((x: any) => x.artists.items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
              // .pipe(map((x: any) => x.artists.items));

  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
     .pipe(map((x: any) => x.tracks));
  }

}
