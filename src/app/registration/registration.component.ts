import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { LoadingPage } from '../loadindicator/loadindicator.component'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends LoadingPage implements OnInit {

  constructor(public storageService: StorageService) {
    super(storageService);
  }

  ngOnInit() {
  }

  isAuthenticatedUser() {
    return this.storageService.isAuthenticatedUser();
  }
}
