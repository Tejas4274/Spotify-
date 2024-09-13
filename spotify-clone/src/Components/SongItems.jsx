import React, { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

const SongItems = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[150px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff25]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-150 text-sm">{desc}</p>
    </div>
  );
};

export default SongItems;
