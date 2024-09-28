

import React from 'react'
import { Checkbox, Spin } from "antd";
import { useState } from "react";
import { Object, Props, SubMenu} from './interface/interface';



export const EvtspAccessRole: React.FC<Props> = ({ dataSource ,loading=false, title=['صفحات','بخش ها','دکمه ها'] }) => {

    const [subMenu, setsubMenu] = useState<any>([])
    const [selectedMenu, setselectedMenu] = useState<number>(0)
    const [selectedSubMenu, setselectedSubMenu] = useState<number>(0)
    const [object, setobject] = useState<any>([])
    const [data, setdata] = useState(dataSource)
    const [menuIndex, setmenuIndex] = useState<number>(0)
    const [subMenuIndex, setSubMenuIndex] = useState<number>(0)




    return (
    
        <div className="w-full flex justify-center items-center h-screen ">

            <div className=" w-2/3 flex flex-col gap-2">

                <div className="w-full flex gap-2">
                    <div className="h-[90svh] w-full border border-1 rounded-md">
                        <div className=" w-full bg-stone-100 p-3 flex justify-center items-center">
                            <h1>{title[0]}</h1>
                        </div>

                        {
                            data?.menu?.map((menu, index) => {



                                return (
                                    (
                                        <>
                                            <div key={menu.menuId} className={` w-full flex p-3 gap-1 ${menu?.menuId == selectedMenu ? "bg-blue-100" : ""
                                                }`} onClick={() => { setsubMenu(menu.subMenu), setselectedMenu(Number(menu?.menuId)), setmenuIndex(index),setobject([]),setselectedSubMenu(0) }}>
                                                <Checkbox
                                                    key={menu.menuId}
                                                    defaultChecked={menu.isActive}
                                                    onChange={(e) => {
                                                        setselectedMenu(Number(menu.menuId))
                                                        const isChecked = e.target.checked;


                                                        setdata((prevData) => {
                                                            const updatedMenu = prevData.menu.map((menuItem, idx) => {
                                                                if (idx === index) {

                                                                    return {
                                                                        ...menuItem,
                                                                        isActive: isChecked,
                                                                    };
                                                                }
                                                                return menuItem;
                                                            });

                                                            return {
                                                                ...prevData,
                                                                menu: updatedMenu,
                                                            };
                                                        });
                                                    }}
                                                />
                                                <h1>{menu.menuName}</h1>
                                                <h1> </h1>
                                            </div>
                                            <div className=" w-auto border-t border-1 mx-2"></div>
                                        </>
                                    )
                                )

                            })
                        }


                    </div>
                    <div className="h-[90svh] w-full border border-1 rounded-md">
                        <div className={` w-full bg-stone-100 p-3 flex justify-center items-center `}>
                            <h1>{title[1]}</h1>
                        </div>

                        {
                            subMenu?.map((n: SubMenu, subMenuIndex: number) => (
                                <>
                                    <div key={`${selectedMenu}-${n.subMenuId}`} className={` w-full flex p-3 gap-1 ${selectedSubMenu == n?.subMenuId ? 'bg-blue-100' : ''}`} onClick={() => {
                                        setobject(n.objects), setselectedSubMenu(Number(n?.subMenuId)); setSubMenuIndex(subMenuIndex);
                                        


                                    }}>
                                        <Checkbox
                                            key={`${selectedMenu}-${n.subMenuId}`}
                                            defaultChecked={n.isActive}
                                            onChange={(e) => {
                                                const isChecked = e.target.checked;

                                                setdata((prevData) => {
                                                    const updatedMenu = prevData.menu.map((mItem, idx) => {


                                                        if (idx === menuIndex) {

                                                            const updatedSubMenu = mItem.subMenu.map((sItem, subIdx) => {
                                                                if (subIdx === subMenuIndex) {
                                                                    return {
                                                                        ...sItem,
                                                                        isActive: isChecked, // Update subMenu isActive
                                                                    };
                                                                }
                                                                return sItem;
                                                            });

                                                            return {
                                                                ...mItem,
                                                                subMenu: updatedSubMenu, // Update subMenu array
                                                            };
                                                        }
                                                        return mItem;
                                                    });

                                                    return {
                                                        ...prevData,
                                                        menu: updatedMenu,
                                                    };
                                                });
                                            }}
                                        />
                                        <h1>{n?.subMenuTitle}</h1>
                                        <h1> </h1>
                                    </div>
                                    <div className=" w-auto border-t border-1 mx-2"></div>
                                </>
                            ))
                        }

                    </div>
                    <div className="h-[90svh] w-full border border-1 rounded-md">
                        <div className=" w-full bg-stone-100 p-3 flex justify-center items-center">
                            <h1>{title[2]} </h1>
                        </div>

                        {
                            object?.map((objectItem: Object, objectIndex: number) => (
                                <>
                                    <div  key={`${selectedMenu}-${selectedSubMenu}-${objectItem?.objectId}`} className=" w-full flex p-3 gap-1" >
                                        <Checkbox
                                            key={`${selectedMenu}-${selectedSubMenu}-${objectItem?.objectId}`}
                                            defaultChecked={objectItem?.isActive}
                                            onChange={(e) => {
                                                const isChecked = e.target.checked;

                                                setdata((prevData) => {
                                                    const updatedMenu = prevData.menu.map((mItem, idx) => {
                                                        if (idx === menuIndex) {
                                                            const updatedSubMenu = mItem.subMenu.map((sItem, subIdx) => {

                                                                if (subIdx === subMenuIndex) {
                                                                    const updatedObjects = sItem.objects.map((oItem, objIdx) => {


                                                                        if (objIdx === objectIndex) {
                                                                            return {
                                                                                ...oItem,
                                                                                isActive: isChecked,
                                                                            };
                                                                        }
                                                                        return oItem;
                                                                    });

                                                                    return {
                                                                        ...sItem,
                                                                        objects: updatedObjects,
                                                                    };
                                                                }
                                                                return sItem;
                                                            });

                                                            return {
                                                                ...mItem,
                                                                subMenu: updatedSubMenu,
                                                            };
                                                        }
                                                        return mItem;
                                                    });

                                                    return {
                                                        ...prevData,
                                                        menu: updatedMenu,
                                                    };
                                                });
                                            }}
                                        />
                                        <h1>{objectItem?.objectName}</h1>
                                        <h1> </h1>
                                    </div>
                                    <div className=" w-auto border-t border-1 mx-2"></div>
                                </>
                            ))
                        }
                    </div>




                </div>


            </div>


        </div>)
}

