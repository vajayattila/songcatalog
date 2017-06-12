import { MainMenuService } from './main-menu.service';
import { MenuItemType } from './menuitemtype';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  public menuitems: Array<MenuItemType>;
  private showedSubMenu: string;
  private activemenu: string;
  private activesubmenu: string;

  @Output()
  onhidemenu: EventEmitter<string> = new EventEmitter();

  constructor(private mainMenuService: MainMenuService) { }

  ngOnInit() {
    this.menuitems = this.mainMenuService.getMenuItems();
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

}
