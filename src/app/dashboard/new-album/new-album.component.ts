import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter  } from '@angular/core';
import { NewAlbumsService } from '../../services/new-albums/new-albums.service';
import { GetsongsService } from '../../services/getsongs/getsongs.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { PlaylistComponent } from '../playlist/playlist.component';



@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css'],

})

export class NewAlbumComponent implements OnInit, AfterViewInit {

  //@Output() onFilter:EventEmitter = new EventEmitter();


  private _playlistComponent: PlaylistComponent;

  public NewAlbums= [];
  number;
  message;
  constructor(private _newalbumservice: NewAlbumsService, private http: HttpClient, private _getSongsService: GetsongsService) { }
  ngOnInit() {
    this._newalbumservice.getAlbums()
      .subscribe(data => {
        this.NewAlbums.push(data);    
        this.NewAlbums = JSON.parse(this.NewAlbums[0]);         
    }); 
  }
  ngAfterViewInit(){
   
  } 

  // clickFilter(): void {
  //   // this.onFilter.emit('Register click');
  //   this._getSongsService.filter('Register click');
  // }

  getSongs(x,y){
    this._getSongsService.filter(x);
    
  // this._getSongsService.changeMessage(y);
  //   this._playlistComponent.test();

  //   this._getSongsService.currentMessage.subscribe(message => this.message = message)
  // //  newMessage() {
  //     // this._getSongsService.changeMessage("Hello from Sibling")
  //     console.log(this.message)
  //   console.log(x + ":" + y);
    }

    
   
  }
