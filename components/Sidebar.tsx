import React, {ReactElement}  from "react";
import SidebarRow from "./SidebarRow";
import {IoIosPeople, IoIosArrowDown} from "react-icons/io";
import {BsPeopleFill,
        BsBag,
        BsFillCalendarEventFill,
        BsFillClockFill} from "react-icons/bs";
import {FiMonitor} from "react-icons/fi";

        
function Sidebar():ReactElement{

    return(
        <div className="p-2 mt-5 hidden flex-col w-2/12 max-w-[600px] xl:min-w-[200px] sm:flex">
            <SidebarRow src="https://scontent.fcai19-6.fna.fbcdn.net/v/t1.6435-9/75262194_10219189753709080_2516605472564314112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c5gncIVfB0sAX96wYXa&_nc_ht=scontent.fcai19-6.fna&oh=00_AfBofWN6ERz2TZiUV36wdM5yVwGVSzUeuXkn5WFn3KFVMg&oe=63EFA5FD" title="Mohannad Barakat"/>
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