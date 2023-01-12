import React, {ReactElement}  from "react";
import Image from "next/image";

interface SidebarRowType{
    src?: string|null
    Icon?: any,
    title?: string|null
}

function SidebarRow({src, Icon, title}:SidebarRowType):ReactElement{

    return(
        <div className="w-auto flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200">
            
            {src &&(
                <Image 
                    className='rounded-full'
                    src={src}
                    width={30} 
                    height={30}
                    alt="user"
                    layout='fixed'/>
            )}
                
            {Icon &&(
                <Icon className="h-6 w-6 text-blue-500" />
            )}
            <p className="hidden sm:inline-flex font-medium">{title}</p>

        </div>
    )

}
export default SidebarRow;