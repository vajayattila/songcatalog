import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storageservice/storage.service';
import { moduleVersionType } from '../about/about.types';
import { LoadingPage } from '../loadindicator/loadindicator.component';
import { MessagePanelComponent } from '../messagepanel/messagepanel.component';
import { AboutService } from './about.service';

import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends LoadingPage implements OnInit {
  versions: Array<moduleVersionType>;
  status: string;
  statuscode: number;

  constructor(
    public storageService: StorageService,
    protected aboutService: AboutService
  ) {
    super(storageService);
  }

  ngOnInit() {
    this.aboutService.getVersions()
      .subscribe(
      versions => {
        this.versions = versions['versions'];
        this.status = versions['status'];
        this.statuscode = versions['statuscode'];
      }, //Bind to view
      err => {
        // Log errors if any
        this.storageService.setErrorMessage(err)
      },
      () => {
        if (this.statuscode !== 0) {
          this.storageService.setErrorMessage(this.status);
        }
        this.storageService.ready()
      });
  }

}
