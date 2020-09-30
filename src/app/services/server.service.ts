import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Devices } from '../models/devices';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': 'my-auth-token'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  mockUrl:string = 'http://localhost:3000/devices';

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  getListSkylightDevice():Observable<Devices[]>{
    return this.http.get<Devices[]>(this.mockUrl, httpOptions)
  }
}
