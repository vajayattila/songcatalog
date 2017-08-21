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
	
}
