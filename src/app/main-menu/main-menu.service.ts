import { MenuItemType } from './menuitemtype';
import { Injectable } from '@angular/core';

@Injectable()
export class MainMenuService {
  menuitems: Array<MenuItemType>;

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  constructor() {
    this.menuitems = [{
      id: this.guid(),
      caption: 'Home',
      route: 'home',
      subItems: []
    }, {
      id: this.guid(),
      caption: 'Login/Registration',
      route: 'loginmain',
      subItems: [{
        id: this.guid(),
        caption: 'Login',
        route: 'login'
      }, {
        id: this.guid(),
        caption: 'Registration',
        route: 'registration'
      }]
    }, {
      id: this.guid(),
      caption: 'Base data',
      route: 'basedatamain',
      subItems: [{
        id: this.guid(),
        caption: 'Genres',
        route: 'genres'
      }, {
        id: this.guid(),
        caption: 'Regions',
        route: 'regions'
      }]
    }, {
      id: this.guid(),
      caption: 'About',
      route: 'about',
      subItems: []
    }
    ];
  }

  getMenuItems() {
    return this.menuitems;
  }


}
