import React, {ReactElement}  from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

function Login():ReactElement{
    return (
        <div className="grid place-content-center">
            <Image 
                src="https://links.papareact.com/5me" 
                width={100} 
                height={100}
                alt="facebook logo"/>

            <button onClick={() => signIn()}>Sign in</button>
        </div>
    )
}
export default Login;