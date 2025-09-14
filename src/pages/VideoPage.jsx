import { div } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { Link, redirect, useParams } from "react-router-dom";
import { fetchData } from "../../utils/RapidApi";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosShareAlt, IoMdDownload } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";

function VideoPage() {
  const { video_id } = useParams();
  const [videoPlayerData, setVideoPlayerData] = useState(null);
  const [chennalId, setChannalId] = useState(null);
  const [channelDetail, setChannelDetail] = useState(null);
  const [recommendedVideos, setRecommendedVideoData] = useState(null);

  const fetchVedioData = async () => {
    const { items } = await fetchData(
      `videos?part=snippet,statistics,contentDetails&id=${video_id}`
    );

    console.log(items);
    setVideoPlayerData(items[0]);
    setChannalId(items[0].snippet.channelId);
  };

  const fetchChennalData = async () => {
    const chennalInfo = await fetchData(
      `channels?part=snippet,statistics&id=${chennalId}`
    );

    setChannelDetail(chennalInfo);
  };

  const fetchRecommendedVideosData = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=p7q7i98reOI&type=video&maxResults=5&key=AIzaSyDnYcbFjO-ASG557GnFgeyo_yE_1YdYpkI`;
    console.log("👉 Fetching:", url);

    const res = await fetch(url);
    console.log(res);

    // setRecommendedVideoData(recommendations);
  };

  useEffect(() => {
    fetchVedioData();
    fetchRecommendedVideosData();
  }, [video_id]);
  console.log(video_id);

  useEffect(() => {
    if (chennalId) {
      fetchChennalData();
    }
  }, [chennalId]);

  return (
    <div className="min-h-screen w-full px-4 py-20 bg-neutral-100 overflow-x-hidden ">
      <div className="grid h-150 md:grid-cols-[70%_1fr] gap-4 container mx-auto">
        <div className="relative h-120 ">
          <iframe
            className="h-120 w-full relative top-0 left-0"
            src={`https://www.youtube.com/embed/${video_id}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
          <div className="mt-2">
            <p className="text-xl font-semibold text-neutral-700 font-poppins">
              {videoPlayerData?.snippet.title}
            </p>
            {channelDetail && (
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src={
                        channelDetail?.items[0]?.snippet.thumbnails?.high.url
                      }
                      alt="avatar"
                      className="rounded-full h-10 w-10"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-neutral-600">
                      {channelDetail?.items[0]?.snippet?.title}
                    </h1>
                    <p className="text-sm text-neutral-600 font-poppins">
                      {channelDetail?.items[0]?.statistics.subscriberCount.toLocaleString(
                        "en-IN"
                      )}
                      <span className="text-[12px] ml-2">Subscribers</span>
                    </p>
                  </div>
                  <button className="px-4 py-2 border border-black hover:border-neutral-300 hover:bg-red-500 hover:text-white transition duration-150 cursor-pointer rounded-full ml-3 font-poppins">
                    Subscribe
                  </button>
                </div>
                <div className="flex items-center gap-7 cursor-pointer">
                  <div className="flex items-center gap-4 bg-neutral-200 px-5 py-2 font-poppins text-xl rounded-full">
                    <div className="flex items-center gap-1">
                      <AiOutlineLike />
                      <p className="font-poppins text-sm">
                        {Math.floor(Math.random() * 1000)}
                      </p>
                    </div>
                    <div className="text-neutral-500">|</div>
                    <div>
                      <AiOutlineDislike />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-neutral-200 px-5 py-2 font-poppins text-xl rounded-full">
                    <IoIosShareAlt className="text-lg" />
                    <p className="font-poppins text-sm">Share</p>
                  </div>
                  <div className="flex items-center gap-1 bg-neutral-200 px-5 py-2 font-poppins text-sm rounded-full">
                    <IoMdDownload />
                    <p className="font-poppins text-sm">Download</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {videoPlayerData && (
            <div className="mt-2 rounded-sm bg-neutral-200 w-full p-4">
              <p className="font-poppins">
                {videoPlayerData?.statistics.viewCount} views
                <span className="ml-5 text-sm font-medium">
                  {videoPlayerData.snippet.publishedAt}
                </span>
              </p>
              <p className="tracking-tight font-poppins mt-2 text-neutral-800">
                {videoPlayerData.snippet.description}
              </p>
            </div>
          )}
        </div>
        <div className="h-full w-full cursor-pointer  flex flex-col gap-5">
          {recommendedVideos &&
            recommendedVideos.map((recommendation_data) => {
              return (
                <Link
                  to={`/video/${recommendation_data.video_id}`}
                  className="w-full h-fit grid-cols-2 grid gap-2"
                >
                  <div className="rounded-xl bg-black h-25">
                    <img
                      src={recommendation_data?.thumbnails[0].url}
                      className="w-full h-full object-cover rounded-xl hover:scale-105 transition-scale duration-150 cursor-pointer"
                      alt="avatar"
                    />
                  </div>
                  <div className="py-0">
                    <p className="font-poppins tracking-tight leading-5">
                      {recommendation_data.title.length > 45
                        ? recommendation_data.title.slice(0, 45) + "..."
                        : recommendation_data.title}
                    </p>
                    <p className="text-sm font-medium font-robo text-black">
                      {recommendation_data?.author}
                    </p>
                    <p className="text-sm flex gap-1 font-medium text-neutral-700">
                      {recommendation_data.number_of_views.toLocaleString(
                        "en-IN"
                      )}
                      <span>views</span>
                    </p>
                    <p className="text-[12px] font-robo">
                      {recommendation_data?.published_time}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
