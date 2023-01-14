import React, {ReactElement}  from "react";
import Image from "next/image";
import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./posts";

function Feed():ReactElement{

    return(
        <div className="flex-grow h-screen pb-44 flex-row mt-10 w-full sm:w-8/12">
            <div><Stories /></div>
            <InputBox />
            <Posts />
        </div>
    )
}
export default Feed;