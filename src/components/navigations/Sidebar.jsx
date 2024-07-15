import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../SidebarNavItems';

const Sidebar = ({ sideBarSize }) => {
  return (
    <div className={`hidden md:block z-50 sticky top-16 h-[calc(100vh-64px)] bg-background transition-all overflow-y-scroll no-scrollbar ${sideBarSize === "large" ? ' w-72 px-5' : 'w-20'}`}>
      <ul className={`space-y-2 ${sideBarSize === "large" ? 'mt-2' : ''}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink 
              to={item.href} 
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-2 py-2 transition-all hover:bg-primary hover:text-white ${
                  isActive ? 'bg-primary text-white' : ''
                } ${sideBarSize === "large" ? 'flex-row rounded-xl' : 'flex-col justify-center items-center'}`
              }>
              <item.icon className="h-5" />
              <p className={`text-nowrap  ${sideBarSize === "large" ? '' : ' text-xs text-center'}`}>{item.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;