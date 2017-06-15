export class SubItemType {
  id: string;
  caption: string;
  route: string;
  verified: boolean;  
}

export class MenuItemType {
  id: string;
  caption: string;
  route: string;
  subItems: Array<SubItemType>;
  verified: boolean;
}
