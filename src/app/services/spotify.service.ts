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
      'Authorization': 'Bearer BQAjSOB7AWWiAoZgPokNHA6rMLF361ht3rnsDWfiu62wSzHvZ7XvuZRGzUXdbMOCrSETNJnaoYNkMlpHPMc'
    });

    return this.http.get(url, {headers});
  }


  getNewReleases() {
    return this.getQuery('browse/new-releases')
              .pipe(map( (data: any) => data.albums.items));

  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe(map((x: any) => x.artists.items));

  }
}
