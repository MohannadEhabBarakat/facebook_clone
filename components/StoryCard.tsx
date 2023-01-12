import React, {ReactElement}  from "react";
import Image from "next/image";

 interface story{
    name: string,
    src: string,
    profile: string
 }

function StoryCard({name, src, profile}:story):ReactElement{
    
    return(
        
        <div className=" relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 
                        cursor-pointer overflow-x transition duration-200 transform ease-in
                         hover:scale-105 hover:animate-pulse">
           <Image 
                src={profile} 
                width={30} 
                height={30}
                layout="fixed"
                alt="profile"
                objectFit="cover"
                className=" absolute opacity-0 lg:opacity-100 ml-3 rounded-full z-50 top-3"
                />
            
            <Image 
                src={src} 
                layout="fill"
                alt="profile"
                className=" object-cover filter brightness-75 rounded-full lg:rounded-2xl"
                />
            <p className=" hidden lg:block absolute z-50 bottom-3 mx-auto w-full text-white text-center">{name}</p>
        </div>

        
    )
}
export default StoryCard;