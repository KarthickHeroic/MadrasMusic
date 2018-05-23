import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewAlbums, Iimages, ISVGTile } from './new-albums';

import { Observable } from 'rxjs/observable';

@Injectable()
export class NewAlbumsService {
private _url: string = "https://service.madrasmusic.com/MMService.svc/GetNewReleases";
  private _urlImage: string = "../../assets/Imagedata.json";

  
  constructor(private http: HttpClient) { }
getAlbums(): Observable<INewAlbums[]>{
  return this.http.get<INewAlbums[]>(this._url);
}

  getImage(): Observable<Iimages[]> {
    return this.http.get<Iimages[]>(this._urlImage);
  }



}
