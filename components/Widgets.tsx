import React, {ReactElement}  from "react";
import { useSession } from "next-auth/react"
import Image from "next/image";
import { AiTwotoneVideoCamera, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Chat from "./chat";

function Widgets():ReactElement{
    const { data: session } = useSession()
    const friends = [
        {
            name:"Noha Magdy",
            image:session?.user?.image,
            status:true
        }
    ]
    return(
        <div className="p-2 mt-5 hidden flex-col w-2/12 max-w-[600px] xl:min-w-[200px] md:flex">
            <div className=" text-gray-600 flex flex-row justify-between">
                <p>Contacts</p>
                <div className="flex flex-row justify-center">
                    <AiTwotoneVideoCamera className="m-1"/>
                    <AiOutlineSearch className="m-1"/>
                    <BsThreeDots className="m-1"/>
                </div>
            </div>
            
            { friends.map((friend)=>{
                
                return <Chat online={true} src={friend.image} name={friend.name}/>
            
            })}
        </div>
    )
}
export default Widgets;