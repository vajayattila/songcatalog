/*import * as os from 'os';
import * as electron from 'electron';*/
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from './translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapsed: string;
  //title: string;

  constructor(protected titleService: Title, protected translate: TranslateService) {
    //this.title = 'Song Catalog';
    this.collapsed = 'collapse';
  }

  ngOnInit() {
    this.setTitle(this.translate.instant('SongCatalog'));
  }

  toggleMenu() {
    if (this.collapsed === '') {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }

  hideMenu() {
    this.collapsed = 'collapse';
  }

  showMenu() {
    this.collapsed = '';
  }

  hideMenuEvent($event) {
    this.hideMenu();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
