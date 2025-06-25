"use client";

import { useState } from "react";
import MyMenu from "@/app/boards/components/MyMenu";

const ProfileIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="340"
      height="340"
      viewBox="0 0 340 340"
      className={className}
    >
      <path
        fill="currentColor"
        d="m169,.5a169,169 0 1,0 2,0zm0,86a76,76 0 1 1-2,0zM57,287q27-35 67-35h92q40,0 67,35a164,164 0 0,1-226,0"
      />
    </svg>
  );
};

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen((isOpen) => !isOpen)} className="relative">
      <ProfileIcon className="size-10 cursor-pointer text-gray-300 transition-colors duration-75 hover:text-blue-400" />
      {isOpen && <MyMenu />}
    </button>
  );
};

export default Profile;
