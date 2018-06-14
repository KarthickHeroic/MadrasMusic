import { Component, OnInit } from '@angular/core';
import { MusicPlayerService } from 'ngx-soundmanager2plus';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private _musicPlayerService: MusicPlayerService) { }

  ngOnInit() {
  }


  get playlist(): any {
    return this._musicPlayerService.getPlaylist();
  }


}
