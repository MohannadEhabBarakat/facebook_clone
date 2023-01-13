import React, {ReactElement}  from "react";
import Image from "next/image";
import StoryCard from "./StoryCard";

function Stories():ReactElement{
    const stories = [
        {
            name:"Sonny Songha",
            src:"https://links.papareact.com/zof",
            profile:"https://links.papareact.com/l4v"
        },
        {
            name:"Elon Musk",
            src:"https://links.papareact.com/4za",
            profile:"https://links.papareact.com/kxk"
        },
        {
            name:"Jeff Bazoz",
            src:"https://links.papareact.com/k2j",
            profile:"https://links.papareact.com/f0p"
        },
        {
            name:"Mark",
            src:"https://links.papareact.com/xql",
            profile:"https://links.papareact.com/snf"
        }
        ,
        {
            name:"Bill Gates",
            src:"https://links.papareact.com/4u4",
            profile:"https://links.papareact.com/zvy"
        }
    ]
    return(
        <div className="flex justify-center p-5 space-x-3 mx-auto overflow-x-scroll scrollbar-hide h-auto overflow-y-hidden">
            {
            stories.map((story)=>{
                return <StoryCard name={story.name} src={story.src} profile={story.profile}/>
            })
            }
        </div>
    )
}
export default Stories;