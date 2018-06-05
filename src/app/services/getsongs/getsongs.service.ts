import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import { IgetAlbum, IgetSongs } from './IgetSongs';
import { Connection, Cservices } from './../constring';

@Injectable({
  providedIn: 'root'
})
export class GetsongsService {

  constructor(private http: HttpClient, private _connection: Connection, private _Cservices: Cservices){}
  private _url: string = this._connection.serviceurl + this._Cservices.getSongs;
  
  getSongs(albumId): Observable<IgetAlbum[]> {
    let Params = new HttpParams();
    Params = Params.append('albumId', albumId);    
    return this.http.get<IgetAlbum[]>(this._url, { params: Params })
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }


  private _listners = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

}
