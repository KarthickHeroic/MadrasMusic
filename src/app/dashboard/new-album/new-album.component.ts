
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter  } from '@angular/core';
import { NewAlbumsService } from '../../services/new-albums/new-albums.service';
import { GetsongsService } from '../../services/getsongs/getsongs.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { PlayListComponent } from '../playlist/playlist.component';



@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css'],

})

export class NewAlbumComponent implements OnInit, AfterViewInit {

  //@Output() onFilter:EventEmitter = new EventEmitter();




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

  getSongs(x,y){ this._getSongsService.filter(x); }    
  }
