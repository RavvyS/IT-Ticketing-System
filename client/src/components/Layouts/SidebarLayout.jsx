import React from "react";
import Sidebar from "../common/Sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default SidebarLayout;