import { Injectable } from '@angular/core';
import { Connection, Cservices } from './../constring';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { IAuth } from './loginauth.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { observable, Subject } from 'rxjs';

@Injectable()
export class loginService {
  private _url: string = this._connection.serviceurl + this._Cservices.Auth;
  constructor(private http: HttpClient,private _connection: Connection, private _Cservices: Cservices) { }

  CheckUser(user, password): Observable<IAuth[]> {
    let Params = new HttpParams();
    Params = Params.append('Email', user);
    Params = Params.append('Password',password);
    return this.http.get<IAuth[]>(this._url, { params: Params})
            .catch(this.errorHandler);      
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error")
  }

  
}

@Injectable()
export class GetuserNameService {
  private dataStringSource = new Subject<string>();
  getUser$ = this.dataStringSource.asObservable();  
  setUser(data: string) {
    this.dataStringSource.next(data)
  }
}

