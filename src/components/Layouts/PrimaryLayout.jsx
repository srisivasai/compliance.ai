import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../navigations/Topbar';
import Sidebar from '../navigations/Sidebar';


const Layout = () => {
  const [sideBarSize, setSideBarSize] = useState('small')

  return (
    <div className="relative">
      <Topbar setSideBarSize = {setSideBarSize}/>
      <div className="flex relative min-h-[calc(100vh-64px)]">
        <Sidebar sideBarSize={sideBarSize} />
        <main className="p-5 w-full min-h-full bg-muted">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;