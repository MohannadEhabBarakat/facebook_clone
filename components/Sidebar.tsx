import React, {ReactElement}  from "react";
import { useSession } from "next-auth/react"
import SidebarRow from "./SidebarRow";
import {IoIosPeople, IoIosArrowDown} from "react-icons/io";
import {BsPeopleFill,
        BsBag,
        BsFillCalendarEventFill,
        BsFillClockFill} from "react-icons/bs";
import {FiMonitor} from "react-icons/fi";

        
function Sidebar():ReactElement{
    const { data: session } = useSession()

    return(
        <div className="p-2 mt-5 hidden flex-col w-2/12 max-w-[600px] xl:min-w-[200px] sm:flex">
            <SidebarRow src={session?.user?.image} title={session?.user?.name}/>
            <SidebarRow Icon={BsPeopleFill} title="Freinds"/>
            <SidebarRow Icon={IoIosPeople} title="Groups"/>
            <SidebarRow Icon={BsBag} title="Markceetpla"/>
            <SidebarRow Icon={FiMonitor} title="Watch"/>
            <SidebarRow Icon={BsFillCalendarEventFill} title="Events"/>
            <SidebarRow Icon={BsFillClockFill} title="Memories"/>
            <SidebarRow Icon={IoIosArrowDown} title="See more"/>
        </div>
    )

}
export default Sidebar;