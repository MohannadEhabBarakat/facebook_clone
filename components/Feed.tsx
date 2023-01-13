import React, {ReactElement}  from "react";
import Image from "next/image";
import Stories from "./Stories";
import InputBox from "./InputBox";

function Feed():ReactElement{

    return(
        <div className="flex-grow h-screen pb-44 flex-row mt-10 w-8/12">
            <div><Stories /></div>
            <InputBox />
        </div>
    )
}
export default Feed;