import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, MessageCircle, Heart, Settings, LogOut } from 'lucide-react';

function SideBar() {
  const menuItems = [
    { icon: <Home />, path: '/', label: 'Home' },
    { icon: <User />, path: '/profile', label: 'Profile' },
    { icon: <MessageCircle />, path: '/messages', label: 'Messages' },
    { icon: <Heart />, path: '/matches', label: 'Matches' },
    { icon: <Settings />, path: '/settings', label: 'Settings' },
  ];

  return (
    <aside className="hidden md:block fixed left-0 top-0 h-screen w-20 bg-white text-gray-900 shadow-md flex flex-col justify-between p-4 z-50">
      
      {/* Top */}
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <span className="text-xl font-bold">YM</span>

        {/* Menu */}
        <ul className="flex flex-col items-center gap-6 mt-8 w-full">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full flex justify-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-center w-full p-2 rounded-md transition
                   hover:bg-gray-100 ${isActive ? 'bg-gray-200' : ''}`
                }
              >
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom - Logout */}
      <div className="pt-12">
        <NavLink
          to="/logout"
          className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <LogOut size={20} />
        </NavLink>
      </div>
    </aside>
  );
}

export default SideBar;
