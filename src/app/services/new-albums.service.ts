import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewAlbums } from './new-albums';
import { Observable } from 'rxjs/observable';

@Injectable()
export class NewAlbumsService {
private _url: string = "https://service.madrasmusic.com/MMService.svc/GetNewReleases";

  constructor(private http: HttpClient) { }
getAlbums(): Observable<INewAlbums[]>{
  return this.http.get<INewAlbums[]>(this._url);
}

}
