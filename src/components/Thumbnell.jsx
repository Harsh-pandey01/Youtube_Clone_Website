import { motion } from "motion/react";
function Thumbnell({
  video_id,
  thumbnail,
  title,
  author,
  veiws,
  length,
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
      <div className=" h-60 sm:h-50 md:h-60 w-full rounded-xl overflow-hidden hover:overflow-visible cursor-pointer transition duration-500">
        <img src={thumbnail} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <h1 className="font-poppins mt-2">{title}</h1>
        <p className="font-robo text-sm mt-1 text-black/60 hover:text-black/80 transition duration-150 cursor-pointer font-semibold">
          {author}
        </p>
        <div className="flex items-center gap-1 font-semibold -mt-3">
          <p className="font-robo text-sm  text-black/60">
            {veiws > 1000000
              ? (veiws / 1000000).toFixed(1) + "M"
              : veiws > 100000
              ? (veiws / 100000).toFixed(1) + "L"
              : veiws > 1000
              ? (veiws / 1000).toFixed(1) + "K"
              : veiws}
          </p>
          <div className="mb-5 text-2xl">.</div>
          <p className="font-robo text-sm  text-black/60">{publish_time}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Thumbnell;
