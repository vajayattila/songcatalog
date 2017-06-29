import { Injectable, NgModule, OnInit } from '@angular/core';
import { versionsType } from './types';
import { Http, Response, RequestOptions } from '@angular/http';
import { MenuItemType } from '../main-menu/menuitemtype';
import * as Config from '../config.json';
import { HelperClass } from './helperclass';
import { TranslateService } from '../translate/translate.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageService extends HelperClass{
	private authuuid = undefined;
	public config;

	constructor(private http: Http, protected translateService: TranslateService) {
		super(translateService);
		this.config = Config;
	}

	getVersions(): Observable<versionsType> {
		this.standBy();
		return this.http.get(this.config['songContestWebServiceUrl'], {
			search: { action: 'getversion' }
		})
			// ...and calling .json() on the response to return data
			.map((res: Response) => res.json())
			//...errors if any
			.catch(error => Observable.throw(error.json().error || 'Server error'));
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

	activate(code) {
		this.addInfoMessage('Sent activation code to server...');
		// activate on server
	}

}
