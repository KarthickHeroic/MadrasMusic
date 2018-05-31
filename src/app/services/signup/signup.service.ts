import { Injectable } from '@angular/core';
import { ISignup } from './signupInterface.service';
import { HttpClient, HttpParams, HttpErrorResponse }  from '@angular/common/http';
import { Connection, Cservices } from '../constring';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { observable, Subject } from 'rxjs';

@Injectable()
export class SignupService {

    private _url: string = this._connection.serviceurl + this._Cservices.Signup;
  constructor(private http: HttpClient, private _connection: Connection, private _Cservices: Cservices) { }

 SignupUser(name,email, password): Observable<ISignup[]> {
    let Params = new HttpParams();
    Params = Params.append('Name', name);
    Params = Params.append('Email', email);
    Params = Params.append('Password', password);
    return this.http.get<ISignup[]>(this._url, { params: Params })
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }
}
