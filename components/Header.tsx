import React, {ReactElement}  from "react";
import Image from "next/image";
import { AiOutlineSearch, 
         AiFillHome, 
         AiOutlineFlag,
         AiOutlinePlayCircle,
         AiOutlineShoppingCart,
         AiFillBell,
        } from "react-icons/ai";
import { HiUserGroup,
        HiViewGrid } from "react-icons/hi";
import { BsFillChatDotsFill} from "react-icons/bs";
import { RiArrowDropDownLine} from "react-icons/ri";
import HeaderIcon from "./HeaderIcon";


function Header():ReactElement{

    return(
        // flex justify-between
        <div className=" sticky top-0 z-50 bg-white flex justify-between sm:items-center p-1 lg:p-3
                         shadow-md w-full">
            {/* left */}
            <div className="flex items-center">
                <Image 
                src="https://links.papareact.com/5me" 
                width={40} 
                height={40}
                alt="facebook logo"/>
                <div className=" flex items-center ml-2 rounded-full bg-gray-100 p-2">
                    <AiOutlineSearch className=" h-6 text-gray-600"/>
                    <input type="text" placeholder="Search Facebook" className="hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500"></input>
                </div>
            </div>
            {/* center */}
           
            <div className="hidden sm:flex justify-center flex-grow">
                <div className="flex space-x-2 md:space-x-6">
                    <HeaderIcon Icon={AiFillHome} active/>
                    <HeaderIcon Icon={AiOutlineFlag} />
                    <HeaderIcon Icon={AiOutlinePlayCircle} />
                    <HeaderIcon Icon={AiOutlineShoppingCart} />
                    <HeaderIcon Icon={HiUserGroup} />
                </div>
            </div>
            {/* right */}
            <div className="flex items-center sm:space-x-1 justify-end">
                <Image 
                onClick={()=>signOut()}
                className='rounded-full cursor-pointer'
                src= "https://scontent.fcai19-6.fna.fbcdn.net/v/t1.6435-9/75262194_10219189753709080_2516605472564314112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c5gncIVfB0sAX96wYXa&_nc_ht=scontent.fcai19-6.fna&oh=00_AfBofWN6ERz2TZiUV36wdM5yVwGVSzUeuXkn5WFn3KFVMg&oe=63EFA5FD"
                width={25} 
                height={25}
                alt="user"
                layout='fixed'/>

                <p className="hidden sm:flex whitespace-nowrap font-semibold pr-3 cursor-pointer">Mohannad Barakat</p>
                <HiViewGrid className="icon"/>
                <BsFillChatDotsFill className="icon"/>
                <AiFillBell className="icon"/>
                <RiArrowDropDownLine className="icon"/>
            </div>

        </div>
    )
}
export default Header;