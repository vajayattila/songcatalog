import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storageservice/storage.service'
import { LoadingPage } from '../loadindicator/loadindicator.component';

@Component({
	selector: 'app-messagepanel',
	templateUrl: './messagepanel.component.html',
	styleUrls: ['./messagepanel.component.css']
})
export class MessagePanelComponent extends LoadingPage implements OnInit {

	constructor(public storageService: StorageService) {
		super(storageService);
	}

	ngOnInit() {
	}

	isAuthenticatedUser() {
		return this.storageService.isAuthenticatedUser();
	}

	getInfoMessage(): Array<String> {
		return this.storageService.getInfoMessage();
	}

	getErrorMessage(): Array<String> {
		return this.storageService.getErrorMessage();
	}

	getWarningMessage(){
		return this.storageService.getWarningMessage();
	}

	getSuccessMessage(){
		return this.storageService.getSuccessMessage();
	}

}
