/*import * as os from 'os';
import * as electron from 'electron';*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapsed: string;
  title: string;

  constructor() {
    this.title = 'Song Catalog';
    this.collapsed = 'collapse';
  }

  ngOnInit(){

    
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

}
