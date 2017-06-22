import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service'
import { versionsType, moduleVersionType } from '../types'
import { LoadingPage } from '../loadindicator/loadindicator.component'

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
        console.log(err);
      },
      ()=>{
        this.storageService.ready()
      });
  }

}
