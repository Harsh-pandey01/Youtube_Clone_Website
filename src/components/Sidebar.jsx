import React, { useContext, useState } from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike, AiOutlineMenu } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";

import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { SidebarContext } from "../context/SidebarContext";

function Sidebar() {
  const { isSidebarOpen } = useContext(SidebarContext);

  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserSquareThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Padcasts",
      icon: <MdPodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  const { setIsSidebarOpen } = useContext(SidebarContext);
  return (
    <div
      onClick={(e) => {
        setIsSidebarOpen((prev) => !prev);
      }}
      className={`h-screen absolute -top-[60px] md:top-0 z-20  left-0 w-screen md:opacity-100 bg-black/50 transition-all duration-500 md:bg-red-300 md:static md:h-fit md:w-fit
    ${
      isSidebarOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    } `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`absolute  z-20 bg-white ${
          isSidebarOpen ? "md:fixed  md:top-[60px] md:left-0" : "md:hidden"
        } ${isSidebarOpen ? "left-0" : "-left-full"} 
            bottom-0   w-fit  
              transition-all duration-300  
               `}
      >
        <div className="flex md:hidden items-center gap-3 px-4 bg-white w-[258px]">
          <AiOutlineMenu
            className="cursor-pointer text-xl"
            onClick={() => {
              setIsSidebarOpen((prev) => !prev);
            }}
          />
          <div className="flex items-center text-xl font-bold ">
            <img src="Youtube-logo.png" alt="logo" className="w-15" />
            <h1 className="font-logo text-2xl text-black/80">Youtube</h1>
          </div>
        </div>

        <div className="h-[calc(100vh-60px)] overflow-y-scroll overflow-x-hidden pr-4">
          {/* Home */}
          <div className="flex flex-col">
            {sidebarItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex font-poppins cursor-pointer items-center space-x-6 px-5 py-2 hover:bg-black/10 transition duration-150 rounded-xl "
                >
                  <div className="text-xl">{item.icon}</div>
                  <span className="cursor-pointer">{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className="w-full h-[1px] bg-black/10 my-4"></div>
          {/* You */}
          <div className="mt-4 items-center">
            <div className="flex items-center mb-2">
              <h1 className="pl-5  pr-1 font-semibold font-robo">You</h1>
              <FaChevronRight className="text-[12px]" />
            </div>
            {sidebarItems2.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex font-poppins cursor-pointer items-center space-x-6 px-5 py-2 hover:bg-black/10 transition duration-150 rounded-xl "
                >
                  <div className="text-xl cursor-pointer">{item.icon}</div>
                  <span className="cursor-pointer">{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className="w-full h-[1px] bg-black/10 my-4"></div>
          {/* Explore */}
          <div className="mt-4  items-center">
            <div className="items-center ">
              <h1 className="pl-5  pr-1 font-semibold font-robo mb-1">
                Explore
              </h1>
            </div>
            {sidebarItems3.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex font-poppins cursor-pointer items-center space-x-6 px-5 py-2 hover:bg-black/10 transition duration-150 rounded-xl "
                >
                  <div className="text-xl cursor-pointer">{item.icon}</div>
                  <span className="cursor-pointer">{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className="w-full h-[1px] bg-black/10 my-4"></div>
          {/* More section */}
          <div className="mt-4  items-center">
            <div className="items-center space-x-2">
              <h1 className=" font-semibold text-center mb-2">
                More From Youtube
              </h1>
            </div>
            {sidebarItems4.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex font-poppins cursor-pointer  items-center space-x-6 px-5 py-3 hover:bg-black/10 transition duration-150 rounded-xl "
                >
                  <div className="text-xl cursor-pointer text-red-500">
                    {item.icon}
                  </div>
                  <span className="cursor-pointer">{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className="w-full h-[1px] bg-black/10 my-4"></div>
          <div className="text-center">
            <span className="text-xs text-gray-600 font-semibold">
              About Press Copyright <br /> Contact us Creators <br /> Advertise
              Developers <br />
              <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube
              works <br /> Test new features
            </span>
            <br />
            <p className="text-xs text-gray-500 mt-3">© 2024 Learn Coding</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
