export interface Data {
    menu: Menu[];
}

export interface Menu {
    menuId:   number | string;
    menuName: string;
    isActive: boolean;
    subMenu:  SubMenu[];
}

export interface SubMenu {
    subMenuId:    number | string;
    subMenuTitle: string;
    isActive:     boolean;
    objects:      Object[];
}

export interface Object {
    objectId:   number | string;
    objectName: string;
    isActive:   boolean;
}

export interface Props {
    dataSource:Data
    loading:boolean
    title ?: string[]
}






