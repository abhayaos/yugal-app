import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Menu } from "lucide-react";

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      <SideBar />

      <div className="md:hidden fixed top-0 left-0 w-full bg-white z-40 flex items-center justify-between p-4 shadow-md">
        <img src="/logo.png" className="h-8" alt="logo" />
        <button onClick={() => setSidebarOpen(true)} className="p-2">
          <Menu size={24} />
        </button>
      </div>

      <main className="min-h-screen p-4 md:ml-20 pt-20 md:pt-4">
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
