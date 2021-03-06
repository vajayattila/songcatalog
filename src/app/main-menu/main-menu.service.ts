import { Injectable, NgModule, OnInit } from '@angular/core';
import { StorageService } from '../storageservice/storage.service';
import { MenuItemsResponseType } from './main-menu.types';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MainMenuService implements OnInit {

    constructor(
        protected storageService: StorageService,
        protected http: Http
    ) {

    }

    ngOnInit() {
        
    }

    getMenuItems(): Observable<MenuItemsResponseType> {
        this.storageService.standBy();
        return this.http.get(this.storageService.getSongContestWebServiceUrl(), {
            params: { action: 'getmenuitems' }
        })
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}    