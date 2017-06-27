import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storageservice/storage.service'

@Component({
    selector: 'app-load-indicator',
    templateUrl: './loadindicator.component.html',
    styleUrls: ['./loadindicator.component.css']
})
export class LoadIndicatorComponent {}

export class LoadingPage{

    constructor(protected storageService: StorageService) { 
    }

    standBy() {
        return this.storageService.standBy();

    }
    ready() {
        return this.storageService.ready();
    }
    isReady(){
        return this.storageService.isReady();        
    }
}