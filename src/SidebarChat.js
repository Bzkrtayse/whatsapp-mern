import React from "react";
import { Avatar } from "@mui/material";
function SidebarChat() {
  return (
    <div className=" flex flex-wrap items-center border-x ">
      <Avatar className="m-4" />
      <div className=" w-96 max-w-80 border-b border-slate-200 ">
        <h2 className="mt-4 text-lg text-black-900 ">Name</h2>
        <p className=" mb-4 text-sm text-zinc-500">last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
