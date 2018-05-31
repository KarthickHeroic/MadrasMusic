import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewAlbums, Iimages, ISVGTile } from './new-albums';
import { Connection, Cservices } from './../constring';
import { Observable } from 'rxjs/observable';

@Injectable()
export class NewAlbumsService {
  constructor(private http: HttpClient, private _connection: Connection, private _Cservices: Cservices) { }

  private _url: string = this._connection.serviceurl+this._Cservices.getAlbum;
  
  private _urlImage: string = "../../assets/Imagedata.json";

getAlbums(): Observable<INewAlbums[]>{
  return this.http.get<INewAlbums[]>(this._url);
}

  getImage(): Observable<Iimages[]> {
    return this.http.get<Iimages[]>(this._urlImage);
  }
  
}
