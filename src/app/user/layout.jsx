"use client";

import { useState } from "react";
import Topbar from "@/theme/topbar/Topbar";
import Header from "@/theme/header/Header";
import Sidebar from "@/theme/sidebar/Sidebar";

const UserLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-sp-green">
      <Topbar onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <Sidebar
        isMobileOpen={isSidebarOpen}
        onClose={closeSidebar}
        className="lg:hidden"
      />

      <div className="flex flex-1 min-h-0">
        <div className="hidden lg:block shrink-0">
          <Sidebar className="h-full" />
        </div>

        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto bg-black">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
