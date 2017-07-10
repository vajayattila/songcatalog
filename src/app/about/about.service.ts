import { Injectable, NgModule, OnInit } from '@angular/core';
import { StorageService } from '../storageservice/storage.service';
import { versionsResponseType } from './about.types';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService implements OnInit {
	
    constructor(
        protected storageService:StorageService,
        protected http:Http
    ){

    }

    ngOnInit(){
         
    }

	getVersions(): Observable<versionsResponseType> {
		this.storageService.standBy();
		return this.http.get(this.storageService.getSongContestWebServiceUrl(), {
			params: { action: 'getversion' }
		})
			// ...and calling .json() on the response to return data
			.map((res: Response) => res.json())
			//...errors if any
			.catch(error => Observable.throw(error.json().error || 'Server error'));
	}    
}