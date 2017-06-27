import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storageservice/storage.service';
import { versionsType, moduleVersionType } from '../storageservice/types';
import { LoadingPage } from '../loadindicator/loadindicator.component';
import { MessagePanelComponent } from '../messagepanel/messagepanel.component';

import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [StorageService]
})
export class AboutComponent extends LoadingPage implements OnInit {
  versions: Array<moduleVersionType>;

  constructor(public storageService: StorageService) {
    super(storageService);
  }

  ngOnInit() {
    this.storageService.getVersions()
      .subscribe(
      versions => this.versions = versions['versions'], //Bind to view
      err => {
        // Log errors if any
        this.storageService.setErrorMessage(err)
      },
      ()=>{
        this.storageService.ready()
      });
  }

}
