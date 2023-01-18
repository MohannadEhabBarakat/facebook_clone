// 'use client';

import React, {ReactElement}  from "react";
import { useCollection } from 'react-firebase-hooks/firestore'
import { db, storage } from '../firebase';
import { collection, orderBy, query } from "firebase/firestore";
import Post from "./Post";

function Posts():ReactElement{
    const [realtimePosts, loading, error] = useCollection(
        query(collection(db, "posts"), orderBy('timestamp', 'desc'))
    )

    // console.log(error)
    // console.log(realtimePosts)

    return(
        

        <div className="mt-5 w-11/12 sm:w-8/12 block mx-auto items-center">
        {
            realtimePosts?.docs.map(post=>{
                
                return <Post
                    key={post.id}
                    name={post.data().name}
                    massage={post.data().massage}
                    email={post.data().email}
                    timestamp={post.data().timestamp}
                    image={post.data().image}
                    postImage={post.data().postImage}
                />  
            })
        }
        </div>
    )

}
export default Posts;