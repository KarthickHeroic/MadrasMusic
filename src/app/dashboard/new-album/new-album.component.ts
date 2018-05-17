import { Component, OnInit } from '@angular/core';
import { NewAlbumsService } from '../../services/new-albums.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {
  public NewAlbumsArray = [];
  public NewAlbums= [];
  constructor(private _newalbumservice: NewAlbumsService, private http: HttpClient) { }
  ngOnInit() {
    this._newalbumservice.getAlbums()
    .subscribe(data => {this.NewAlbumsArray.push(data);    
      this.NewAlbums = JSON.parse(this.NewAlbumsArray[0]);
    });     

  }
}
