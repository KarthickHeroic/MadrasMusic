import { element, Key } from 'protractor';
import { IgetSongs } from './../../services/getsongs/IgetSongs';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GetsongsService } from '../../services/getsongs/getsongs.service';
import { MusicPlayerService } from 'ngx-soundmanager2plus';


@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent implements OnInit {
  
  message: string;
  public songs = [];
  constructor(private _getSongsService: GetsongsService, private _musicPlayerService: MusicPlayerService) {
    this._getSongsService.listen().subscribe((m: any) => {
      this.getSongsfromAlbum(m);
    })
   }
  getSongsfromAlbum(event) {
    this._getSongsService.getSongs(event)
      .subscribe(data => { 
        this.songs = [];
        this.songs.push(data); 
        this.songs = (JSON.parse(this.songs[0]))['Songs'];   
        this.songs.forEach(element => {
          this._getSongsService.getSongsUrl(element.Id, 0).subscribe(songurl => {      
            element.id= element.Id;
            delete element.Id; 
            element["url"] = songurl;
          });        
      });       
    });        
  }

  ngOnInit() {
   
  }
 
}
  

