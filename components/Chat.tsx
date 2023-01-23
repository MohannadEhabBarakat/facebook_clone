import React, { ReactElement } from "react";
import Image from "next/image";

interface SidebarRowType {
  src: string;
  name: string;
  online: boolean;
}

function Chat({ src, name, online }: SidebarRowType): ReactElement {
  return (
    <div className="w-auto flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200">
      <div className="flex relative">
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          alt="user"
          layout="fixed"
        />
        <div
          className={`absolute right-1 bottom-0 w-2 h-2 rounded-full ${
            online ? "bg-green-500" : "bg-red-600"
          }`}
        ></div>
      </div>

      <p className="hidden md:inline-flex font-medium">{name}</p>
    </div>
  );
}
export default Chat;
