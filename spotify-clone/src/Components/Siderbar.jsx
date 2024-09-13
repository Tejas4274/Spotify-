import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import { songsData } from "../assets/frontend-assets/assets";
import { useNavigate } from "react-router-dom";

const Siderbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[10%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img src={assets.home_icon} alt="" className="w-5" />
          <p className="font-semibold">Home</p>
        </div>
      </div>

      <div className="flex items-center gap-3 pl-8 cursor-pointer">
        <img src={assets.search_icon} alt="" className="w-5" />
        <p className="font-semibold">Search</p>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create Your First Playlist</h1>
          <p className="font-light">It's Easy We Will Help You</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-">
          <h1>Lets Find Some Podcast To Follow</h1>
          <p className="font-extralight">Updates on New Episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Siderbar;
