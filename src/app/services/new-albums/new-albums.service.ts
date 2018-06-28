import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INewAlbums, Iimages, ISVGTile } from './new-albums';
import { Connection, Cservices } from './../constring';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { HttpClientModule } from '@angular/common/http';
import { isNull, isUndefined } from 'lodash';

@Injectable()
export class NewAlbumsService {

  constructor(private http: HttpClient, private _connection: Connection, private _Cservices: Cservices) { }
  private __headers;
  private _url: string = this._connection.serviceurl+this._Cservices.getAlbum;
  
  private _urlImage: string = "http://192.168.1.208:53008/api/Artist/88A83B40-900B-4C9A-9F23-E79C2B9E663D/Image";

getAlbums(): Observable<INewAlbums[]>{  
  return this.http.get<INewAlbums[]>(this._url
  //   , {
  //   headers: this.createAuthorizationHeader()
  // }
);
}

  getImage(): Observable<Iimages[]> {
    return this.http.get<Iimages[]>(this._urlImage);
  }

  // createAuthorizationHeader(): HttpHeaders {
  //   // Just checking is this._options is null using lodash
  //   if (isNull(this.__headers)) {      
  //     this.__headers = {
  //       headers: new HttpHeaders({
  //         'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With', 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS' }) };
  //   }

  //   return this.__headers;
  // }
  
}
