"use client";

import { useState } from "react";
import Home from "@/pages/Home";
import Topbar from "@/theme/topbar/Topbar";
import Sidebar from "@/theme/sidebar/Sidebar";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-sp-green">
      <Topbar onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <Sidebar
        isMobileOpen={isSidebarOpen}
        onClose={closeSidebar}
        className="lg:hidden"
      />

      <Home />
    </div>
  );
};

export default HomePage;
