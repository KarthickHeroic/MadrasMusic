import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import { IgetSongs, IgetSongsUrl } from './IgetSongs';
import { Connection, Cservices } from './../constring';

@Injectable({
  providedIn: 'root'
})
export class GetsongsService {

  constructor(private http: HttpClient, private _connection: Connection, private _Cservices: Cservices){}
  private _url: string = this._connection.serviceurl + this._Cservices.getSongs;
  private _songsUrl: string = this._connection.serviceurl + this._Cservices.getSongsUrl;
  
  getSongs(albumId): Observable<IgetSongs[]> {
    let Params = new HttpParams();
    Params = Params.append('albumId', albumId);    
    return this.http.get<IgetSongs[]>(this._url, { params: Params })
      .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }

  getSongsUrl(songId, quality): Observable<IgetSongsUrl[]> {
    let Params = new HttpParams();
    Params = Params.append('songId', songId);
    Params = Params.append('quality', quality);
    Params = Params.append('userId', '');
    return this.http.get<IgetSongsUrl[]>(this._songsUrl, { params: Params })
      .catch(this.errorHandler);
  }


  private _listners = new Subject<any>();
  private _playListlistners = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

  playListlistener(): Observable<any> {
    return this._playListlistners.asObservable();
  }
  playList() {
    this._playListlistners.next();
  }

}
