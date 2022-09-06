import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";
import ArchiveIcon from "@mui/icons-material/Archive";
function Sidebar() {
  return (
    <div className="w-96 max-w-80 bg-white">
      <div
        className=" flex flex-wrap justify-between bg-zinc-100 items-center
      "
      >
        <div className="p-2 pl-4 ">
          <Avatar src="https://i.pinimg.com/236x/ca/12/50/ca12507d915829de3df03a1595169d28.jpg" />
        </div>
        <div className="mr-4">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <div className=" flex flex-inital items-center justify-between">
          <span className=" rounded-tl-lg rounded-bl-lg bg-zinc-100 h-9 ml-4">
            <IconButton>
              <SearchIcon fontSize="small" />
            </IconButton>
          </span>

          <input
            placeholder="Search or start new chat"
            className="rounded-tr-lg rounded-br-lg text-sm w-80 outline-none my-2 bg-zinc-100 p-2"
            type="text"
            name=""
            id=""
          />

          <IconButton>
            <FilterListIcon fontSize="small" color="disabled" />
          </IconButton>
        </div>

        <div className=" w-96 max-w-80 mx-4 flex flex-wrap items-center">
          <IconButton>
            <ArchiveIcon color="success" />
          </IconButton>
          <h2 className="border-b pb-2 mx-4 text-lg ">Archived</h2>
        </div>
        <div>
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
