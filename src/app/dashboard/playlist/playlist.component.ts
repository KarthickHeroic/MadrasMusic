import { Component, OnInit, AfterViewInit } from '@angular/core';
import { element, Key } from 'protractor';
import { GetsongsService } from '../../services/getsongs/getsongs.service';
import { MusicPlayerService } from './../../services/madrasmusicplayer/madrasmusicplayer'
import { IgetSongs } from './../../services/getsongs/IgetSongs';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlayListComponent implements OnInit {
  albumTitle:string;
  message: string;
  public songs = [];
  constructor(private _getSongsService: GetsongsService, private _musicPlayerService: MusicPlayerService) {
    this._getSongsService.listen().subscribe((m: any) => {
      this.getSongsfromAlbum(m);
    })
    this._getSongsService.playListlistener().subscribe((any) => {
      this.showPlaylist();
    })
   
    }
  getSongsfromAlbum(event) {
  //  this._getSongsService.getSongs("dbc0c7a9-5d4d-4632-aaac-2db8e8cbce17")
    this._getSongsService.getSongs(event)

      .subscribe(data => { 
        this.songs = [];       
        this.songs.push(data);         
        this.albumTitle =(JSON.parse(this.songs[0]))['Title']; 
        this.songs = (JSON.parse(this.songs[0]))['Songs'];       
        this.songs.forEach(element => {
          element.id = element.Id;
          delete element.Id;                 
      });        
    });        
  }    
  ngOnInit() {
   
  }
  showPlaylist(){
    this.songs=[];
    this.albumTitle="Playlist"
    this.songs=this.playlist;     
  }


  get playlist(): any {    
     return this._musicPlayerService.getPlaylist();
  }

  
}
  

