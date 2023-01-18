import React, {ReactElement}  from "react";
import Image from "next/image";
import { AiTwotoneVideoCamera, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Chat from "./Chat";

function Widgets():ReactElement{
    const friends = [
        {
            name:"Noha Magdy",
            image:"https://scontent.fcai19-6.fna.fbcdn.net/v/t1.6435-9/159521957_2348253638651389_8317824226829883503_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=Q2UpnJxQIJ0AX-dK5bc&_nc_ht=scontent.fcai19-6.fna&oh=00_AfBKESCZWaEBgqE8AlH1E0q5TEmE_0Wd-_V1UZvrdGmpig&oe=63EB886D",
            status:true
        },
        {
            name:"Ibrahem el-kedwany",
            image:"https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/306052011_209367944768940_5116915325040705202_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YZOxgnwW-PoAX8HbblG&_nc_ht=scontent.fcai19-6.fna&oh=00_AfAzAp2V2fiM8QOr4I1_HWbx80Lp9Db9XIi73V_V-j4s2A&oe=63C84734",
            status:false
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
                
                return <Chat online={friend.status} src={friend.image} name={friend.name}/>
            
            })}
        </div>
    )
}
export default Widgets;