import React, {ReactElement}  from "react";

interface HeaderIconType{
    Icon: any,
    active?: boolean
}

function HeaderIcon({Icon, active}:HeaderIconType):ReactElement{
    return (
        <div className="flex items-center cursor-pointer md:px-10 
        sm:h-14 md:hover:bg-gray-100 rounded-xl border-b-2 border-transparent
        active:border-b-2 active:border-blue-500 group flex-shrink">

        <Icon className={`h-5 text-center sm:h-7 mx-auto group-hover:text-blue-500 text-2xl ${active? "text-blue-500": "text-gray-500"}`}/>
        </div>
    )
}
export default HeaderIcon;