import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav flex flex-row items-center  w-full p-4  ">
      <div className="flex flex-row items-center justify-start pr-12 ">
        <img
          className="h-[25.3px] w-[25.3px] relative m-1"
          loading="lazy"
          alt="logo icon"
          src="/assets/img/logoVector.png"
        />
        <img
          className="h-[13.7px] w-[63.4px] relative"
          loading="lazy"
          alt="logo 2 icon"
          src="/assets/img/logo.png"
        />
      </div>
      <div className="dropdown flex flex-row items-center justify-end border rounded-3xl w-1/3 p-2">
        <img
          className="h-[26px] w-[26px] relative object-cover "
          loading="lazy"
          alt=""
          src="/assets/img/ETH.png"
        />

        <div className=" flex flex-row items-center justify-center w-full">
          <div
            className="dropdown-toggle flex flex-row items-center justify-center "
            onClick={toggleDropdown}
          >
            <p className="text-white">ETH</p>
            <span className="pl-2">
              {isOpen ? (
                <ChevronUpIcon className="w-5 h-auto text-white" />
              ) : (
                <ChevronDownIcon className="w-5 h-auto text-white" />
              )}
            </span>
          </div>
          {isOpen && (
            <div className="dropdown-menu ">
              {/* <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul> */}
            </div>
          )}
        </div>
      </div>
      <img
        className="h-8 w-8 relative object-cover"
        loading="lazy"
        alt=""
        src="/assets/img/Group.png"
      />

      <img
        className="h-6 w-6 relative"
        loading="lazy"
        alt=""
        src="/assets/img/More.png"
      />
    </div>
  );
}

export default NavBar;
