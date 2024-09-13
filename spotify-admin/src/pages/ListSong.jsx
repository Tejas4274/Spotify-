import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";

const ListSong = () => {
  const [data, setData] = useState([]);
  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      if (response.data.success) {
        setData(response.data.songs);
      }
    } catch (error) {
      toast.error("Error Occured");
    }
  };

  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`, { id });
      if (response.data.success) {
        toast.success("Song delete successfully");
        await fetchSongs();
      }
    } catch (error) {
      toast.error("error occured");
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <p>All Songs List</p>
      <br />

      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-1 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>

        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-1"
            >
              <img className="w-12" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <button
                type="submit"
                onClick={() => removeSong(item._id)}
                className="inline-flex items-center px-2 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
              >
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSong;
