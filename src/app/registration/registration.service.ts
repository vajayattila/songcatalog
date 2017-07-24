import { Injectable, NgModule, OnInit } from '@angular/core';
import { StorageService } from '../storageservice/storage.service';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService implements OnInit {

    constructor(
        protected storageService: StorageService,
        protected http: Http
    ){

    }

    ngOnInit(){

    }

	registration(data) {
		this.storageService.standBy();
		let str = JSON.stringify(data);
		console.log(str);
		return this.http.post(
			this.storageService.getSongContestWebServiceUrl(), str, {
				params: {
					action: 'registration'
				}
			}
		)// ...and calling .json() on the response to return data
			.map((res: Response) => res.json())
			//...errors if any
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}    

}