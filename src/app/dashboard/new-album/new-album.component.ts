import { Component, OnInit } from '@angular/core';
import { NewAlbumsService } from '../../services/new-albums/new-albums.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {
  public NewAlbums= [];
  number;
  constructor(private _newalbumservice: NewAlbumsService, private http: HttpClient) { }
  ngOnInit() {
    this._newalbumservice.getAlbums()
      .subscribe(data => {
        this.NewAlbums.push(data);    
        this.NewAlbums = JSON.parse(this.NewAlbums[0]);  
    }); 
  }  
}

