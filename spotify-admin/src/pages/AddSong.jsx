import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";
const AddSong = () => {
  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const onSubmitHandler = async (e) => {
    //not reload the page
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("audio", song);
      formData.append("album", album);

      const res = await axios.post(`${url}/api/song/add`, formData);
      if (res.data.success) {
        toast.success("Song Added");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      } else {
        toast.error("Failed to add song");
      }
    } catch (error) {
      toast.error("error occured");
    }
    setLoading(false);
  };

  const loadAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setData(response.data.songs);
      }
    } catch (error) {
      toast.error("Error Occured");
      console.log(error);
    }
  };

  useEffect(() => {
    loadAlbumData();
  }, []);

  return loading ? (
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-800 mx-auto"></div>
      <h2 className=" text-black mt-4 font-bold">Loading...</h2>
      <p className="text-black font-semibold">
        Your Uploading Is In Process Wait For Some Time
      </p>
    </div>
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start text-gray-600 gap-8"
    >
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload Song</p>
          <input
            onChange={(e) => setSong(e.target.files[0])}
            type="file"
            id="song"
            accept="audio/*"
            hidden
          />
          <label htmlFor="song">
            <img
              className="w-24 cursor-pointer"
              src={song ? assets.upload_added : assets.upload_song}
              alt=""
            />
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            accept="image/*"
            hidden
          />
          <label htmlFor="image">
            <img
              className="w-24 cursor-pointer"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 ">
        <p>Song Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type Here"
          required
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
        />
      </div>
      <div className="flex flex-col gap-2.5 ">
        <p>Song Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          type="text"
          placeholder="Type Here"
          required
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album</p>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          defaultValue={album}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]"
        >
          <option value="none">None</option>
          {data.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
      >
        <span className="text-white font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
          Add
        </span>
        <span className="absolute right-0 h-full w-10 rounded-lg bg-green-600 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
          <svg
            className="svg w-8 text-white"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </span>
      </button>
    </form>
  );
};

export default AddSong;
