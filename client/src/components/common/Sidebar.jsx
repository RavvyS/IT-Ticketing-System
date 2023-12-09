import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Disclosure } from "@headlessui/react";
// import {
//   MdOutlineSpaceDashboard,
//   MdOutlineAnalytics,
//   MdOutlineIntegrationInstructions,
//   MdOutlineMoreHoriz,
//   MdOutlineSettings,
//   MdOutlineLogout,
// } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { FaRegComments } from "react-icons/fa";
// import { BiMessageSquareDots } from "react-icons/bi";

function Sidebar() {
  return (
    <div>
      <div class="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <aside class="sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
          <div class="my-4 w-full border-b-4 border-indigo-100 text-center">
            <span class="font-mono text-xl font-bold tracking-widest">
              {" "}
              <span class="text-indigo-600">HELLO</span> DEV{" "}
            </span>
          </div>
          <div class="my-4"></div>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
