import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean ;
  constructor(
    private activeRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: any) => {
      console.log(params.id);
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(data => {
      console.log("artista", data);
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks(id).subscribe(data => {
      console.log(data);
      this.topTracks = data;
    });
  }
}
