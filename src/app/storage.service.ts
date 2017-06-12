import { Injectable } from '@angular/core';
import { versionsType } from './types';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageService {
  private getVerionURL = 'http://localhost:8000/server.php?action=getversion';

  constructor(private http: Http) {
  }

  getVersions(): Observable<versionsType> {
    return this.http.get(this.getVerionURL)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
