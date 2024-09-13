import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../Context/PlayerContext";

const DisplayAlbum = ({ album }) => {
  const { id } = useParams();
  const [albumdt, setAlbumData] = useState("");
  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    albumsData.map((item) => {
      if (item._id === id) {
        setAlbumData(item);
      }
    });
  }, []);

  return albumdt ? (
    <>
      <Navbar />

      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumdt.image} alt="" />
        <div className="flex flex-col">
          <p className="">Playlist</p>
          <h2 className="text-5xl mb-4 font-bold md:text-7xl">
            {albumdt.name}
          </h2>
          <h4>{albumdt.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>• 1,323,3154 likes • <b>50 songs, </b>
            about 2hr 40min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-3">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>

      <hr />
      {songsData
        .filter((item) => item.album === albumdt.name)
        .map((items, index) => (
          <div
            onClick={() => playWithId(items._id)}
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="text-white">
              <b className="mr-5 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-9 mr-5" src={items.image} alt="" />
              {items.name}
            </p>

            <p className="text-[15px]">{albumsData.name}</p>
            <p className="text-[15px] hidden sm:block">5 days ago</p>
            <p className="text-[15px] text-center">{items.duration}</p>
          </div>
        ))}
    </>
  ) : null;
};

export default DisplayAlbum;
