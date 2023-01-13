// 'use client';

import { Timestamp } from "firebase/firestore";
import React, {ReactElement}  from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { BiShare } from "react-icons/bi";
import { VscComment } from "react-icons/vsc";


interface post{
    // key:string,
    name:string,
    massage:string,
    email:string,
    timestamp:Timestamp,
    image:string,
    postImage:string,
}


function Post({name, massage, email, timestamp, image, postImage}:post):ReactElement{
// function Post():ReactElement{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return(
        

        <div className="pt-5 mt-5 flex flex-col bg-white rounded-2xl shadow-md">
            <div className="m-2 flex flex-row items-start">
                <Image 
                    src={image} 
                    width={40} 
                    height={40}
                    alt="profile"
                    className="rounded-full w-9 h-9"
                />
                <div className="ml-2 flex flex-col items-center justify-center">
                    <p className=" font-medium">{name}</p>
                    <p className=" text-xs text-gray-400">{timestamp?.toDate().toLocaleDateString("en-US", options)}</p>
                </div>
            </div>
            <p className="pt-4 m-2 w-full block m-auto">{massage}</p>

            {postImage && (
                <Image src={postImage}
                 width={40}
                 height={40}
                 alt="post image"
                 className="w-auto"/>
            )}
            <hr className="w-10/12 block mx-auto"/>
            <div className="flex flex-col items-center sm:flex-row px-4">
                <div className="flex flex-row items-center justify-center w-4/12 m-1 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                    <FiThumbsUp/>
                    <button className="ml-1 hidden sm:inline-flex">Like</button>
                </div>

                <div className="flex flex-row items-center justify-center w-4/12 m-1 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                    <VscComment />
                    <button className="ml-1 hidden sm:inline-flex">Comment</button>
                </div>

                <div className="flex flex-row items-center justify-center w-4/12 m-1 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                    <BiShare className=" rotate"/>
                    <button className="ml-1 hidden sm:inline-flex">Share</button>
                </div>
            </div>
        </div>
    )

}

export default Post;