export class SubItemType {
  id: string;
  caption: string;
  route: string;
  showifauthenticated: boolean;
  showdefault: boolean;
}

export class MenuItemType {
  id: string;
  caption: string;
  route: string;
  subItems: Array<SubItemType>;
  showifauthenticated: boolean;
  showdefault: boolean;
}

export class MenuItemsResponseType{
    status: string;
    statuscode: number;
    menuitems: Array<MenuItemType>;
}
