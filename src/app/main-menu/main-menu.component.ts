import { MenuItemsResponseType, MenuItemType } from './main-menu.types';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../storageservice/storage.service';
import { LoadingPage } from '../loadindicator/loadindicator.component';
import { MessagePanelComponent } from '../messagepanel/messagepanel.component';
import { Title } from '@angular/platform-browser';
import { MainMenuService } from './main-menu.service';

import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent extends LoadingPage implements OnInit {
  public menuitems: Array<MenuItemType>;
  private showedSubMenu: string;
  private activemenu: string;
  private activesubmenu: string;
  private status: string;
  private statuscode: number;

  @Output()
  onhidemenu: EventEmitter<string> = new EventEmitter();

  constructor(
    protected storageService: StorageService, 
    protected titleService: Title,
    protected mainMenuService: MainMenuService
  ) {
    super(storageService);
  }

  ngOnInit() {
    this.mainMenuService.getMenuItems()
      .subscribe(
      menuitems => {
        this.menuitems = menuitems['menuitems'];
        this.status = menuitems['status'];
        this.statuscode = menuitems['statuscode'];
      }, //Bind to view
      error => {
        // Log errors if any
        this.storageService.setErrorMessage(error);
        this.storageService.ready();
      },
      () => {
        // status information from server
        if (this.statuscode !== 0) {
          this.storageService.setErrorMessage(this.status);
        }
        this.storageService.ready()
      });

    this.showedSubMenu = '';
  }

  isShowSubMenu(menuitem: MenuItemType) {
    return menuitem.caption === this.showedSubMenu ? 'open' : '';
  }

  toggleSubMenu(menuitem: MenuItemType) {
    if (menuitem.caption === this.showedSubMenu) {
      this.hideSubMenu();
    } else {
      this.showSubMenu(menuitem);
    }
  }

  showSubMenu(menuitem: MenuItemType) {
    this.showedSubMenu = menuitem.caption;
  }

  hideSubMenu() {
    this.showedSubMenu = '';
  }

  selectUrl(caption: string) {
    this.onhidemenu.emit('hide');
    this.activemenu = caption;
    this.activesubmenu = '';
  }

  isActiveMenu(caption) {
    return this.activemenu === caption ? 'active' : '';
  }

  selectSubUrl(mainCaption: string, subCaption: string) {
    this.onhidemenu.emit('hide');
    this.activemenu = mainCaption;
    this.activesubmenu = subCaption;
  }

  isActiveSubMenu(caption) {
    return this.activesubmenu === caption ? 'active' : '';
  }

  isAuthenticatedUser() {
    return this.storageService.isAuthenticatedUser();
  }

  isShowableMenuItem(item) {
    let retval;
    if (this.isAuthenticatedUser()) {
      retval = item['showifauthenticated'];
    } else {
      retval = item['showdefault'];
    }
    return retval;
  }

  logout() {
    this.storageService.logout();
  }

  setLanguage(lang) {
    this.storageService.selectLanguage(lang);
    this.setTitle(this.storageService.instant('SongCatalog'));
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
