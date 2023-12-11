import React from "react";
import {
  FaEarthAsia,
  FaChartColumn,
  FaFrog,
  FaJs,
  FaRegFaceGrinBeam,
  FaHive,
  FaEmpire,
} from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <a href="/dashboard/home">
            <img
              className="w-auto h-7"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </a>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="-mx-3 space-y-6 ">
              <div className="space-y-3 ">
                <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                  analytics
                </label>

                <a
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="/dashboard/home"
                >
                  <FaChartColumn />

                  <span className="mx-2 text-sm font-medium">Dashboard</span>
                </a>

                <a
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="/dashboard/ticketManagement"
                >
                  <FaEarthAsia />

                  <span className="mx-2 text-sm font-medium">Ticket Management</span>
                </a>
              </div>

              <div className="space-y-3 ">
                <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                  content
                </label>

                <a
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <FaFrog />

                  <span className="mx-2 text-sm font-medium">Guides</span>
                </a>

                <a
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <FaJs />

                  <span className="mx-2 text-sm font-medium">Hotspots</span>
                </a>

                <a
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <FaRegFaceGrinBeam />

                  <span className="mx-2 text-sm font-medium">Checklists</span>
                </a>
              </div>

              <div className="space-y-3 ">
                <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                  Customization
                </label>

                <a
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <FaHive />

                  <span className="mx-2 text-sm font-medium">Themes</span>
                </a>

                <a
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <FaEmpire />

                  <span className="mx-2 text-sm font-medium">Setting</span>
                </a>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
