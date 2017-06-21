import { Injectable, NgModule, OnInit } from '@angular/core';
import { versionsType } from './types';
import { Http, Response, RequestOptions } from '@angular/http';
import { MenuItemType } from './main-menu/menuitemtype';
import * as Config from './config.json';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageService {
    private loading;
    private authuuid = 'test';
    public config;

    constructor(private http: Http) {
        this.config = Config;
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
        return this.http.get(this.config['songContestWebServiceUrl'], {
            search: { action: 'getversion' }
        })
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
        return this.http.get(this.config['songContestWebServiceUrl'], {
            search: { action: 'getmenuitems' }
        })
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    isAuthenticatedUser() {
        return this.authuuid !== undefined;
    }

    login() {
        // call server login
        // set this.authuuid
    }

    logout() {
        // call server logout
        this.authuuid = undefined;
    }

}
