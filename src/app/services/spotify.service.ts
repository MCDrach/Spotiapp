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
      'Authorization': 'Bearer BQCJq1RCYqeDvBQaWuUnlGyn5-XyJijGKOLZEvVLGll6NjdO36-NlsZCcaxJdAJu6fSCmAZDc5-30g3-W4M'
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
