import React from "react";
import youtube from "../assets/youtube.png";
import avatar from "../assets/avatar.png";
import { BiMenu, BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiMicFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Navbar({setExtendSidebar}) {
  return (
    <nav className="flex  items-center justify-between md:px-6 px-2 py-3 h-[8vh] sticky top-0 bg-bgColor flex-shrink">
      <div className="flex items-center md:gap-3 gap-1 text-3xl ">
        <p className="p-1 text-lg md:text-3xl rounded-full hover:bg-color1">
        <BiMenu onClick={() => setExtendSidebar(prev => !prev)} className="cursor-pointer"/>
        </p>
       <NavLink to='/'>
       <img className="w-[50px] md:w-[65px]" src={youtube} alt="youtube" />
       </NavLink>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-fit md:w-[50%] justify-center flex-shrink">
        <form className="flex items-center rounded-full border-white border-2">
          <input className="bg-searchC2 text-sm md:text-xl flex-1 w-[500px] bg-transparent  focus:outline-blue-400 focus:outline-2 px-2 py-2 md:px-6 md:py-2 rounded-l-full " type="text" placeholder="Search" />
          <p className="px-2 py-2 md:px-6 md:py-3 text-xl h-full bg-searchC cursor-pointer rounded-r-full">
            <IoSearch />
          </p>
        </form>
        <p className="p-2 md:p-3 text-xl bg-searchC rounded-full hover:bg-gray-700 cursor-pointer">
          <RiMicFill />
        </p>
      </div>

      <div className="flex items-center gap-5 text-3xl">
        <BiVideoPlus className="cursor-pointer hidden md:flex"  />
        <IoMdNotificationsOutline className="cursor-pointer hidden md:flex" />
        <img
          className="w-10 border-white border-2 rounded-full"
          src={avatar}
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
