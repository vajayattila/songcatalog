import { Component, OnInit } from '@angular/core';
import { LoadingPage } from '../loadindicator/loadindicator.component'
import { StorageService } from '../storageservice/storage.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends LoadingPage implements OnInit {

  constructor(public storageService: StorageService) { 
    super(storageService);
  }

  ngOnInit() {
  }

  

}
