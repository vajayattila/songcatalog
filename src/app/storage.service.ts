import { Injectable } from '@angular/core';
import { versionsType } from './types';
import { Http, Response } from '@angular/http';
import { MenuItemType } from './main-menu/menuitemtype';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageService {
    private getVerionURL = 'http://localhost:8000/service?action=getversion';
    private getMenuItemsURL = 'http://localhost:8000/service?action=getmenuitems';
    private loading;


    constructor(private http: Http) {
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    guid() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    getVersions(): Observable<versionsType> {
        this.standBy();
        return this.http.get(this.getVerionURL)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    standBy() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
    isReady() {
        return !this.loading;
    }

    getMenuItems(): Observable<MenuItemType> {
        this.standBy();
        return this.http.get(this.getMenuItemsURL)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
