export interface ISidebarItems {
    name: string;
    dropdown: boolean;
    hasDropDown: boolean;
    routerName?: string;
    subItems?: ISideBarSubItems[];

}

export interface ISideBarSubItems {
    name: string;
    routerName: string;
}

