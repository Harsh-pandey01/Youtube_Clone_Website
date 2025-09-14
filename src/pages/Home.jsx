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
import categories from "../Categories";
import CategoryScroll from "../Categories";
import { motion } from "motion/react";
import { div } from "motion/react-client";
export default function Home() {
  const { isSidebarOpen } = useContext(SidebarContext);
  const [homePageData, setHomePageData] = useState([]);
  const fetchHomepageData = async () => {
    const data = await fetchData(
      "search?part=snippet&q=New&type=video&maxResults=50"
    );

    if (!data.items || data.items.length === 0) return [];

    // Step 2: extract video IDs & unique channel IDs
    const videoIds = data.items.map((i) => i.id.videoId).join(",");
    const channelIds = [
      ...new Set(data.items.map((i) => i.snippet.channelId)),
    ].join(",");

    // Step 3: get video details (views, duration, etc.)
    const videoData = await fetchData(
      `videos?part=snippet,statistics,contentDetails&id=${videoIds}`
    );

    // Step 4: get channel details (avatars, subs)
    const channelData = await fetchData(
      `channels?part=snippet,statistics&id=${channelIds}`
    );

    // Step 5: map channels by ID for quick lookup
    const channelMap = {};
    channelData.items.forEach((ch) => {
      channelMap[ch.id] = {
        channelName: ch.snippet.title,
        channelAvatar: ch.snippet.thumbnails.high.url,
        subscribers: ch.statistics.subscriberCount,
      };
    });

    // Step 6: merge video + channel data
    const finalResults = videoData.items.map((video) => {
      const ch = channelMap[video.snippet.channelId] || {};
      return {
        videoId: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.high.url,
        views: video.statistics.viewCount,
        duration: video.contentDetails.duration, // ISO 8601 (e.g., "PT10M15S")
        publishedAt: video.snippet.publishedAt,
        channelId: video.snippet.channelId,
        channelName: ch.channelName,
        channelAvatar: ch.channelAvatar,
        subscribers: ch.subscribers,
      };
    });

    setHomePageData(finalResults);
  };

  useEffect(() => {
    fetchHomepageData();
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
          console.log(data);

          return (
            <motion.div className="h-fit" key={data.videoId}>
              <Thumbnail
                videoId={data?.videoId}
                thumbnail={data?.thumbnail}
                title={data?.title}
                author={data?.channelName}
                veiws={data.views}
                publish_time={data.publishedAt}
                channelAvatar={data?.channelAvatar}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
