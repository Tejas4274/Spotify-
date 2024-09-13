import React, { useState } from "react";
import { assets } from "../assets/assets";
import { url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [colour, setColour] = useState("#121212");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("bgColour", colour);

      const response = await axios.post(`${url}/api/album/add`, formData);
      if (response.data.success) {
        toast.success("Album Added");
        setDesc("");
        setImage(false);
        setName("");
      } else {
        toast.error("Album Not Added");
      }
    } catch (error) {
      toast.error("Some Error Occured");
      console.log(error);
    }
    setLoading(false);
  };
  return loading ? (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-green-800 text-4xl animate-spin flex items-center justify-center border-t-green-800 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-black text-2xl animate-spin flex items-center justify-center border-t-black rounded-full"></div>
      </div>
    </div>
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-8 text-gray-600"
    >
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

      <div className="flex flex-col gap-2.5">
        <p>Album Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="bg-transparent outline-green-600 border-2 border-gray-500 p-2.5 w-[max(40vw,250px)]"
          type="text"
          placeholder="type here"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Album Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="bg-transparent outline-green-600 border-2 border-gray-500 p-2.5 w-[max(40vw,250px)]"
          type="text"
          placeholder="type here"
        />
      </div>

      <div className="flex flex-col gap-3 ">
        <p>Background Colour</p>
        <input
          type="color"
          onChange={(e) => setColour(e.target.value)}
          value={colour}
        />
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

export default AddAlbum;
