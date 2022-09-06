import React from "react";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicIcon from "@mui/icons-material/Mic";
import TagFacesIcon from "@mui/icons-material/TagFaces";
function Chat() {
  return (
    <div className=" w-[60.3rem] bg-[url(https://i.pinimg.com/564x/73/1e/96/731e964bfab9658dc45a0f7f6f1d4d21.jpg)]">
      <header className=" h-14 p-2 border-l-2 bg-zinc-100 w-full flex flex-wrap items-center justify-between">
        <div className="ml-4 flex flex-wrap items-center">
          <Avatar />
          <div className="ml-4">
            <h2 className="text-lg">Name</h2>
            <p className="text-gray-500 text-sm leading-tight">
              last seen at..
            </p>
          </div>
        </div>
        <div className=" flex flex-wrap items-center">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>
      <div className="pl-20 w-2/3 flex flex-wrap">
        <p className="bg-white text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="pl-20 w-2/3 flex flex-wrap">
        <p className="bg-white text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="pl-80 ml-56  flex flex-wrap">
        <p className="bg-green-300 text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="pl-80 ml-56 flex flex-wrap">
        <p className="bg-green-300 text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="pl-20 w-2/3 flex flex-wrap">
        <p className="bg-white text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="pl-80 ml-56 flex flex-wrap">
        <p className="bg-green-300 text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="pl-20 w-2/3 flex flex-wrap">
        <p className="bg-white text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="pl-80 ml-56 flex flex-wrap">
        <p className="bg-green-300 text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="pl-20 w-2/3 flex flex-wrap">
        <p className="bg-white text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="pl-20 w-2/3 flex flex-wrap">
        <p className="bg-white text-md py-1 pl-4 rounded-full shadow-md mt-4">
          Lorem ipsum dolor sit amet.
          <span className="ml-10 mr-4 text-xs text-gray-500">
            {new Date().toLocaleTimeString("en-US")}
          </span>
        </p>
      </div>
      <div className="bg-zinc-100 flex flex-wrap items-center fixed bottom-0  right-0 h-16">
        <span className="pl-2 ">
          <IconButton>
            <TagFacesIcon fontSize="large" />
          </IconButton>
        </span>
        <form>
          <input
            className="w-[50rem] outline-none rounded-md py-2 pl-4"
            type="text"
            placeholder="type a message"
          />
          <button className="mx-2 font-bold text-gray-600 text-lg">Send</button>
        </form>
        <IconButton>
          <MicIcon className="" fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
