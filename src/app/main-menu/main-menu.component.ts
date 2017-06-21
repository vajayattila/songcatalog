//import { MainMenuService } from './main-menu.service';
import { MenuItemType } from './menuitemtype';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../storage.service';
import { LoadingPage } from '../loadindicator/loadindicator.component'

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

  @Output()
  onhidemenu: EventEmitter<string> = new EventEmitter();

  constructor(protected storageService: StorageService) {
    super(storageService);
  }

  ngOnInit() {
    this.storageService.getMenuItems()
      .subscribe(
      menuitems => this.menuitems = menuitems['menuitems'], //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      },
      () => {
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
    if(this.isAuthenticatedUser()){
      retval=item['showifauthenticated'];
    }else{
      retval=item['showdefault'];
    }
    return retval;
  }

  logout(){
    this.storageService.logout();
  }


}
