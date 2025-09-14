import { motion } from "motion/react";
import { Link } from "react-router-dom";
function Thumbnell({
  videoId,
  thumbnail,
  title,
  author,
  veiws,
  channelAvatar,
  publish_time,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      }}
    >
      <Link to={`/video/${videoId}`}>
        <div className=" h-50 sm:h-50 md:h-60 w-full rounded-xl overflow-hidden  hover:overflow-visible cursor-pointer transition duration-500">
          <img src={thumbnail} alt="" className="w-full h-full object-cover" />
        </div>
      </Link>
      <div className="mt-2">
        <h1 className="font-poppins">
          {title.length > 50 ? title.slice(0, 50) + " ..." : title}
        </h1>
        <div className="flex items-center gap-3 mt-2">
          <div>
            <img
              src={channelAvatar}
              alt="avatar"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-poppins text-sm text-black/60 hover:text-black/80 transition duration-150 cursor-pointer font-medium">
              {author}
            </p>
            <div className="flex items-center gap-1 font-semibold ">
              <p className="font-poppins text-[12px]  text-black/60">
                {veiws > 1000000
                  ? (veiws / 1000000).toFixed(1) + "M"
                  : veiws > 100000
                  ? (veiws / 100000).toFixed(1) + "L"
                  : veiws > 1000
                  ? (veiws / 1000).toFixed(1) + "K"
                  : veiws}
              </p>
              <div className="text-[12px] -mt-4 text-neutral-400">.</div>
              <p className="font-poppins text-[12px]  text-black/60">
                {publish_time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Thumbnell;
