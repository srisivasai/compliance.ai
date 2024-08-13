import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner"
import Topbar from '../navigations/Topbar';
import Sidebar from '../navigations/Sidebar';


const Layout = () => {
  const [sideBarSize, setSideBarSize] = useState('small')

  return (
    <div className="relative">
      <Topbar setSideBarSize = {setSideBarSize}/>
      <div className="flex relative min-h-[calc(100vh-64px)]">
        <Sidebar sideBarSize={sideBarSize} />
        <main className={`p-3 md:p-5 w-full bg-muted overflow-hidden flex-grow-0 ${sideBarSize === "large" ? 'md:max-w-[calc(100vw-256px)]': 'md:max-w-calc(100vw-80px)'}`}>
          <Outlet />
          <Toaster position="top-right" closeButton richColors={true}/>
        </main>
        
      </div>
    </div>
  );
};

export default Layout;
