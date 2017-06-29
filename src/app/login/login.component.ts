import { Component, OnInit } from '@angular/core';
import { LoadingPage } from '../loadindicator/loadindicator.component';
import { StorageService } from '../storageservice/storage.service';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends LoadingPage implements OnInit {

  constructor(public storageService: StorageService) { 
    super(storageService);
  }

  ngOnInit() {
  }

  isAuthenticatedUser(){
    return this.storageService.isAuthenticatedUser();
  }

}
