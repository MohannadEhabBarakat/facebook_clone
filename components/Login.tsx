import React, {ReactElement}  from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

function Login():ReactElement{
    return (
        <div className="grid place-content-center h-screen">
            <Image 
                src="https://links.papareact.com/5me" 
                width={100} 
                height={100}
                alt="facebook logo"
                className="block m-auto"
                />

            <button onClick={() => signIn()} className='w-64 block m-auto mt-8 border-b-2 hover:text-gray-700'>Sign in</button>
        </div>
    )
}
export default Login;