'use client';

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import Avatar from "../Avatar";
import { User } from "@prisma/client";
import SettingsModal from "./SettingsModal";
import { useState } from "react";
interface DesktopSidebarProps {
  currentUser: User
}
const MobileFooter: React.FC<DesktopSidebarProps>= ({currentUser}) => {
  const routes = useRoutes();
  const [isOpenS,setIsOpen] = useState(false);
  const { isOpen } = useConversation();
  console.log({ currentUser, }, 'TEST_MOBILE')
  if (isOpen) {
    return null;
  }

  return ( 
    <> <SettingsModal currentUser={currentUser} isOpen={isOpenS} onClose={() => setIsOpen(false)} />
    <div 
      className="
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
        bg-white 
        border-t-[1px] 
        lg:hidden
      "
    >
      {routes.map((route) => (
        <MobileItem 
          key={route.href} 
          href={route.href} 
          active={route.active} 
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
          <div 
            onClick={() => setIsOpen(true)} 
            className="cursor-pointer hover:opacity-75 transition pl-2 pr-2 pt-2"
          >
            <Avatar user={currentUser} />
          </div>
    </div>
    </>
   );
}
 
export default MobileFooter;