// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { Bell, Search, ShieldAlert, Moon, Sun, Menu } from 'lucide-react';

const Header = ({onMenuClick}) => {
  const { role, toggleRole } = useDashboard();
  const isAdmin = role === 'admin';
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 flex items-center justify-between z-10 transition-colors duration-200">
      
      {/* Mobile Menu Button */}
      <button 
        onClick={onMenuClick}
        className="md:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <Menu className="w-6 h-6" />
      </button>
      
      {/* Search Bar */}
      <div className="flex items-center w-96 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
        <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" />
        <input 
          type="text" 
          placeholder="Search anything..." 
          className="bg-transparent border-none outline-none text-sm w-full text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
        />
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-6">
        
        {/* ROLE SWITCHER */}
        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <span className={`text-xs font-semibold uppercase tracking-wider ${!isAdmin ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'}`}>
            Viewer
          </span>
          
          <button 
            onClick={toggleRole}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${isAdmin ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'}`}
          >
            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${isAdmin ? 'translate-x-4' : 'translate-x-1'}`} />
          </button>
          
          <span className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ${isAdmin ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'}`}>
            {isAdmin && <ShieldAlert className="w-3 h-3" />}
            Admin
          </span>
        </div>

        {/* Notifications Icon */}
        <button className="relative p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white dark:border-gray-800"></span>
        </button>
        
        {/* Theme Toggle */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;