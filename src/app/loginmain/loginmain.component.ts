import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { LoadingPage } from '../loadindicator/loadindicator.component';

@Component({
  selector: 'app-loginmain',
  templateUrl: './loginmain.component.html',
  styleUrls: ['./loginmain.component.css']
})
export class LoginmainComponent  extends LoadingPage implements OnInit {

  constructor(public storageService: StorageService) { 
    super(storageService);
  }

  ngOnInit() {
  }

  isAuthenticatedUser(){
    return this.storageService.isAuthenticatedUser();
  }

}
