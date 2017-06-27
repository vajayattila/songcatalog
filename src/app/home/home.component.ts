import { Component, OnInit } from '@angular/core';
import { MessagePanelComponent } from '../messagepanel/messagepanel.component';
import { LoadingPage } from '../loadindicator/loadindicator.component';
import { StorageService } from '../storageservice/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends LoadingPage implements OnInit {

  constructor(public storageService: StorageService) {
    super(storageService);
  }

  ngOnInit() {
  }

}
