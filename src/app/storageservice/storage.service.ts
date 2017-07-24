import { Injectable, NgModule, OnInit } from '@angular/core';
import * as Config from '../config.json';
import { HelperClass } from './helperclass';
import { TranslateService } from '../translate/translate.service';

@Injectable()
export class StorageService extends HelperClass {
	private authuuid = undefined;
	public config;

	constructor(protected translateService: TranslateService) {
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

	getSongContestWebServiceUrl(){
		return this.config['songContestWebServiceUrl'];
	}

}
