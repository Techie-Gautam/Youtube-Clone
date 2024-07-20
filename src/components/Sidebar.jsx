import React from "react";
import avatar from "../assets/avatar.png";
import { GoFile, GoHome, GoHomeFill } from "react-icons/go";
import { GrGamepad, GrTechnology } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";
import { MdSportsBasketball, MdLibraryMusic } from "react-icons/md";
import { FaTv } from "react-icons/fa6";
import { ImBlog } from "react-icons/im";
import { LuNewspaper } from "react-icons/lu";

function Sidebar({extendSidebar, category, setCategory}) {
  return (
    <main className={extendSidebar ? "main w-screen h-screen overflow-hidden top-[8vh] left-0 fixed z-20 transition-all duration-300" : ""}>
    <div className={`sidebar px-[23px] py-3 md:sticky md:translate-x-0   absolute translate-x-[-100%] left-0 h-[92vh] bg-bgColor transition-all duration-300 overflow-y-scroll  ${extendSidebar ? "w-[250px] translate-x-[0px] top-[0] " : "w-24 top-[8vh]"}`}>
        <div className="gap-1 flex flex-col pb-4 ">
          <p className={`flex items-center gap-5 text-base p-2 rounded-lg hover:bg-color1 cursor-pointer ${category === 0 ? "bg-color2" : ""} ${extendSidebar ? "w-full" : "w-fit"}`} onClick={() => setCategory(0)}>
            {category === 0 ? <GoHomeFill className="text-2xl" /> : <GoHome className="text-2xl" />}
            {extendSidebar ? "Home" : ""}
          </p>
          <p className={`flex items-center gap-5 text-base p-2 rounded-lg hover:bg-color1 cursor-pointer ${category === 20 ? "bg-color2" : ""} ${extendSidebar ? "w-full" : "w-fit"}`} onClick={() => setCategory(20)}>
            <GrGamepad className="text-2xl" />
            {extendSidebar ? "Gaming" : ""}
          </p>
          <p className={`flex items-center gap-5 text-base p-2 rounded-lg hover:bg-color1 cursor-pointer ${category === 2 ? "bg-color2" : ""} ${extendSidebar ? "w-full" : "w-fit"}`} onClick={() => setCategory(2)}>
            <FaCarSide className="text-2xl" />
            {extendSidebar ? "Automobiles" : ""}
          </p>
          <p className={`flex items-center gap-5 text-base p-2 rounded-lg hover:bg-color1 cursor-pointer ${category === 17 ? "bg-color2" : ""} ${extendSidebar ? "w-full" : "w-fit"}`} onClick={() => setCategory(17)}>
            <MdSportsBasketball className="text-2xl" />
            {extendSidebar ? "Sports" : ""}
          </p>
          <p className={`flex items-center gap-5 text-base p-2 rounded-lg hover:bg-color1 cursor-pointer ${category === 24 ? "bg-color2" : ""} ${extendSidebar ? "w-full" : "w-fit"}`} onClick={() => setCategory(24)}>
            <FaTv className="text-2xl" />
            {extendSidebar ? "Entertainment" : ""}
          </p>
          <p className={`flex items-center gap-5 text-base p-2 rounded-lg hover:bg-color1 cursor-pointer ${category === 28 ? "bg-color2" : ""} ${extendSidebar ? "w-full" : "w-fit"}`} onClick={() => setCategory(28)}>
            <GrTechnology className="text-2xl" />
            {extendSidebar ? "Technology" : ""}
          </p>
          <p className={`flex items-center gap-5 text-base p-2 rounded-lg hover:bg-color1 cursor-pointer ${category === 10 ? "bg-color2" : ""} ${extendSidebar ? "w-full" : "w-fit"}`} onClick={() => setCategory(10)}>
            <MdLibraryMusic className="text-2xl" />
            {extendSidebar ? "Music" : ""} 
          </p>
          <p className={`flex items-center gap-5 text-base p-2 rounded-lg hover:bg-color1 cursor-pointer ${category === 22 ? "bg-color2" : ""} ${extendSidebar ? "w-full" : "w-fit"}`} onClick={() => setCategory(22)}>
            <ImBlog className="text-2xl" />
            {extendSidebar ? "Vlogs" : ""}
          </p>
          <p className={`flex items-center gap-5 text-base p-2 rounded-lg hover:bg-color1 cursor-pointer ${category === 25 ? "bg-color2" : ""} ${extendSidebar ? "w-full" : "w-fit"}`} onClick={() => setCategory(25)}>
            <LuNewspaper className="text-2xl" />
            {extendSidebar ? "News" : ""}
          </p>
        </div>
        <hr />
       {extendSidebar 
       ?  <div className="px-2 py-4">
       <h2 className="py-2 font-semibold text-xl">Subscription</h2>
       <div className="flex flex-col gap-1">
       <div className="flex items-center gap-5 text-sm hover:bg-color1 p-2 rounded-lg ml-[-16px] cursor-pointer">
           <img className="w-8 rounded-full " src={avatar} alt="" />
           <p className="break-words overflow-ellipsis whitespace-nowrap overflow-hidden">Chai Aur Code</p>
       </div>
       <div className="flex items-center gap-5 text-sm hover:bg-color1 p-2 rounded-lg ml-[-16px] cursor-pointer">
           <img className="w-8 rounded-full " src={avatar} alt="" />
           <p className="break-words overflow-ellipsis whitespace-nowrap overflow-hidden">Code With Harry</p>
       </div>
       <div className="flex items-center gap-5 text-sm hover:bg-color1 p-2 rounded-lg ml-[-16px] cursor-pointer">
           <img className="w-8 rounded-full " src={avatar} alt="" />
           <p className="break-words overflow-ellipsis whitespace-nowrap overflow-hidden">Sheriyans Coding School</p>
       </div>
       <div className="flex items-center gap-5 text-sm hover:bg-color1 p-2 rounded-lg ml-[-16px] cursor-pointer">
           <img className="w-8 rounded-full " src={avatar} alt="" />
           <p className="break-words overflow-ellipsis whitespace-nowrap overflow-hidden">GreatStack</p>
       </div>
       <div className="flex items-center gap-5 text-sm hover:bg-color1 p-2 rounded-lg ml-[-16px] cursor-pointer">
           <img className="w-8 rounded-full " src={avatar} alt="" />
           <p className="break-words overflow-ellipsis whitespace-nowrap overflow-hidden">Traversy Media</p>
       </div>
       </div>
     </div> : ""}
    </div>
   </main>
  );
}

export default Sidebar;
