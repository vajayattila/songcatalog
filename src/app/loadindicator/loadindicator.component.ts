import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storageservice/storage.service'

@Component({
    selector: 'app-load-indicator',
    templateUrl: './loadindicator.component.html',
    styleUrls: ['./loadindicator.component.css']
})
export class LoadIndicatorComponent { }

export class LoadingPage {

    constructor(protected storageService: StorageService) {
    }

    standBy() {
        return this.storageService.standBy();

    }
    ready() {
        return this.storageService.ready();
    }
    isReady() {
        return this.storageService.isReady();
    }

    getSuccessMessage() {
        return this.storageService.getSuccessMessage();
    }

    setSuccessMessage(message: String) {
        this.storageService.setSuccessMessage(message);
    }

    setWarningMessage(message: String) {
        this.storageService.setWarningMessage(message);
    }

    setStatusCode(status: Number) {
        this.storageService.setStatusCode(status);
    }

    setErrorMessage(message: String) {
        this.storageService.setErrorMessage(message);
    }

    setOperationName(name: String) {
        this.storageService.clearMessages();
		this.storageService.setOperationName(name);
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

	getStatusCodeString(){
		return this.storageService.getStatusCodeString();
	}

	getStatusCode(){
		return this.storageService.getStatusCode();
    }
    
    getOperationName(){
        return this.storageService.getOperationName();
    }

    setDescription(message: String){
       this.storageService.setDescription(message); 
    }

    getDescription(): String {
	    return this.storageService.getDescription();
	}

}