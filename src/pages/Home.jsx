import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { createPortal } from "react-dom";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SidebarContext } from "../context/SidebarContext";
import { fetchData } from "../../utils/RapidApi";
import Thumbnail from "../components/Thumbnell";
import data from "../data";
import categories from "../Categories";
import CategoryScroll from "../Categories";
import { motion } from "motion/react";
export default function Home() {
  const { isSidebarOpen } = useContext(SidebarContext);
  const [homePageData, setHomePageData] = useState([...data]);
  const fetchHomepageData = async () => {
    const { videos } = await fetchData(
      "search/?query=New%20lee&lang=en&order_by=this_month&country=us"
    );
    console.log(videos);

    setHomePageData(videos);
  };

  useEffect(() => {
    // fetchHomepageData();
  }, []);
  return (
    <div
      className={`px-2 ${
        isSidebarOpen ? "md:pl-[258px]" : "md:pl-[70px]"
      } flex mt-[60px]`}
    >
      <Sidebar isSidebarOpen={isSidebarOpen} />
      {!isSidebarOpen ? (
        <div className="  hidden md:flex items-center text-center flex-col fixed top-[60px] left-2">
          <div className="flex py-5 hover:bg-black/5 transition duration-200 cursor-pointer w-15 rounded-sm items-center text-center flex-col">
            <GoHome className="text-xl" />
            <p className="text-[10px] font-semibold">Home</p>
          </div>
          <div className="flex py-5 hover:bg-black/5 transition duration-200 cursor-pointer w-15 rounded-sm items-center text-center flex-col">
            <SiYoutubeshorts className="text-xl" />
            <p className="text-[10px] font-semibold">Shorts</p>
          </div>
          <div className="flex py-5 hover:bg-black/5 transition duration-200 cursor-pointer w-15 rounded-sm items-center text-center flex-col">
            <MdOutlineSubscriptions className="text-xl" />
            <p className="text-[10px] font-semibold">Subscribed</p>
          </div>
          <div className="flex py-5 hover:bg-black/5 transition duration-200 cursor-pointer w-15 rounded-sm items-center text-center flex-col">
            <CgProfile className="text-xl" />
            <p className="text-[10px] font-semibold">Profile</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <CategoryScroll />
      <div className="flex-1 z-0 px-5 mt-20   grid grid-cols-[repeat(auto-fill,minmax(1fr,450px))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] place-content-center gap-5">
        {homePageData?.map((data) => {
          return (
            <motion.div className="h-fit" key={data.video_id}>
              <Thumbnail
                videoId={data?.video_id}
                thumbnail={data?.thumbnails[0]?.url}
                title={data?.title}
                author={data?.author}
                veiws={data.number_of_views}
                publish_time={data.published_time}
                length={data.video_length}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
