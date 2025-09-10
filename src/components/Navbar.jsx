import { AiOutlineMenu } from "react-icons/ai";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

export default function Navbar() {
  return (
    <div className="w-full  px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <AiOutlineMenu className="cursor-pointer text-xl" />
        <div className="flex items-center text-xl font-bold ">
          <img src="Youtube-logo.png" alt="logo" className="w-15" />
          <h1 className="font-logo text-2xl text-black/80">Youtube</h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="border border-neutral-400 pl-4 flex overflow-hidden rounded-full">
          <input
            type="text"
            className="py-2 w-80 outline-none font-robo placeholder-font-poppins"
            placeholder="Search"
          />
          <div className="py-2 w-18 bg-neutral-200 border-l  border-gray-400 flex items-center justify-center cursor-pointer">
            <CiSearch className="text-xl" />
          </div>
        </div>
        <div className="bg-black/10 hover:bg-black/20 cursor-pointer transition duration-200  text-black p-2 rounded-full">
          <FaMicrophone className="text-xl" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-black/10 flex items-center gap-1 px-4 cursor-pointer py-2.5 font-robo rounded-full">
          <GoPlus className="text-2xl font-light " />
          <p>Create</p>
        </div>
        <div className="cursor-pointer">
          <CiBellOn className="relative text-2xl " />
        </div>
        <div className="h-12 w-12 rounded-full object-cover overflow-hidden cursor-pointer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3F5APDToo79RzPrUblyHfN3w4Ol2VAoF3w&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
