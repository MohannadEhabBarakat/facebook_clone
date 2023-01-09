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
import { useSession, signIn, signOut } from "next-auth/react"


function Header():ReactElement{
    const { data: session, status } = useSession();

    return(
        // flex justify-between
        <div className=" sticky top-0 z-50 bg-white flex items-center p-2 lg:p-5
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
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Icon={AiFillHome} active/>
                    <HeaderIcon Icon={AiOutlineFlag} />
                    <HeaderIcon Icon={AiOutlinePlayCircle} />
                    <HeaderIcon Icon={AiOutlineShoppingCart} />
                    <HeaderIcon Icon={HiUserGroup} />
                </div>
            </div>
            {/* right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image 
                onClick={()=>signOut()}
                className='rounded-full cursor-pointer'
                src={session.user.image}
                width={40} 
                height={40}
                alt="user"
                layout='fixed'/>

                <p className=" whitespace-nowrap font-semibold pr-3">{session.user?.name}</p>
                <HiViewGrid className="icon"/>
                <BsFillChatDotsFill className="icon"/>
                <AiFillBell className="icon"/>
                <RiArrowDropDownLine className="icon"/>
            </div>

        </div>
    )
}
export default Header;