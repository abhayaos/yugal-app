import React, { useState } from 'react';
import SideBar from './SideBar';
import { Menu, Home, User, MessageCircle, Heart, Settings, LogOut } from 'lucide-react';

function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Desktop Sidebar */}
      <SideBar />

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white z-40 flex items-center justify-between p-4 shadow-md">
        <h1 className="text-xl font-bold"><img src="/logo.png" className="h-8" alt="" /></h1>
        <button onClick={() => setSidebarOpen(true)} className="p-2">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-4 pt-20">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="self-end mb-4 p-2 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <nav className="space-y-2">
                  <a href="/" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
                    <Home className="mr-3" size={20} />
                    <span>Home</span>
                  </a>
                  <a href="/profile" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
                    <User className="mr-3" size={20} />
                    <span>Profile</span>
                  </a>
                  <a href="/messages" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
                    <MessageCircle className="mr-3" size={20} />
                    <span>Messages</span>
                  </a>
                  <a href="/matches" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
                    <Heart className="mr-3" size={20} />
                    <span>Matches</span>
                  </a>
                  <a href="/settings" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
                    <Settings className="mr-3" size={20} />
                    <span>Settings</span>
                  </a>
                  <a href="/logout" className="flex items-center p-3 rounded-lg hover:bg-gray-100 text-red-600">
                    <LogOut className="mr-3" size={20} />
                    <span>Logout</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <main className="min-h-screen p-4 md:ml-20 pt-20 md:pt-4">
        {children}
      </main>

    </div>
  );
}

export default Layout;
