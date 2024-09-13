import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItems from "./SongItems";
import { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);

  return (
    <>
      <Navbar />

      <div className="mb-4">
        <h1 className="my-5 font-semibold text-2xl">Featured Chats</h1>
        <div className="flex overflow-auto">
          {albumsData && albumsData.length > 0
            ? albumsData.map((item, index) => (
                <AlbumItem
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  id={item._id}
                  image={item.image}
                />
              ))
            : null}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-semibold text-2xl">Today's Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
