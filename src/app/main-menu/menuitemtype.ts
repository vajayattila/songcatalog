export class SubItemType {
  id: string;
  caption: string;
  route: string;
}

export class MenuItemType {
  id: string;
  caption: string;
  route: string;
  subItems: Array<SubItemType>;
}
