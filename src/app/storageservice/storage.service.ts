import { Injectable, NgModule, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import * as Config from '../config.json';
import { HelperClass } from './helperclass';
import { TranslateService } from '../translate/translate.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageService extends HelperClass {
	private authuuid = undefined;
	public config;

	constructor(private http: Http, protected translateService: TranslateService) {
		super(translateService);
		this.config = Config;
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

	activate(code) {
		this.addInfoMessage('Sent activation code to server...');
		// activate on server
	}

	registration(data) {
		this.standBy();
		let str = JSON.stringify(data);
		console.log(str);
		return this.http.post(
			this.config['songContestWebServiceUrl'], str, {
				params: {
					action: 'registration'
				}
			}
		)// ...and calling .json() on the response to return data
			.map((res: Response) => res.json())
			//...errors if any
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	getSongContestWebServiceUrl(){
		return this.config['songContestWebServiceUrl'];
	}

}
