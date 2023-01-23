import React, { ReactElement } from "react";

interface HeaderIconType {
  Icon: any;
  active?: boolean;
}

function HeaderIcon({ Icon, active }: HeaderIconType): ReactElement {
  return (
    <div
      className="flex items-center cursor-pointer ml-1 md:ml-4 px-0 md:px-6 
        sm:h-10 md:hover:bg-gray-100 rounded-xl border-b-2 border-transparent
        active:border-b-2 active:border-blue-500 group flex-shrink"
    >
      <Icon
        className={`h-3 text-center sm:h-5 mx-auto group-hover:text-blue-500 text-xl ${
          active ? "text-blue-500" : "text-gray-500"
        }`}
      />
    </div>
  );
}
export default HeaderIcon;
