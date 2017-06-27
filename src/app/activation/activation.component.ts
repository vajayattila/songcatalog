import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StorageService } from '../storageservice/storage.service';
import { LoadingPage } from '../loadindicator/loadindicator.component';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent extends LoadingPage implements OnInit {
  protected activationCode = undefined;

  constructor(private activatedRoute: ActivatedRoute, public storageService: StorageService) {
    super(storageService);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.activationCode = params.code;
      if(this.activationCode!==undefined){
        this.storageService.setInfoMessage('Authentication parameter is detected...');
        this.storageService.activate(this.activationCode);
      }
    });
  }

  activationCodeIsExists() {
    return this.activationCode !== undefined;
  }

  isAuthenticatedUser(){
    return this.storageService.isAuthenticatedUser();
  }

}
