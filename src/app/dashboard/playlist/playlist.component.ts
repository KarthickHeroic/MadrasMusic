import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GetsongsService } from '../../services/getsongs/getsongs.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  message: string;
  public album = [];
  public songs = [];
  constructor(private _getSongsService: GetsongsService) {
    this._getSongsService.listen().subscribe((m: any) => {
      this.getSongsfromAlbum(m);
    })
   }
  getSongsfromAlbum(event) {
    this._getSongsService.getSongs(event)
      .subscribe(data => {
        this.album = [];
        this.album.push(data); 
        console.log(this.album)
        this.album = JSON.parse(this.album[0]); 
        this.songs =this.album['Songs'];
     

  });
}

  ngOnInit() {
  }

 
}
  

  
