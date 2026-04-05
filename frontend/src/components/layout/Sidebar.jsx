// src/components/layout/Sidebar.jsx
import React from 'react';
import { LayoutDashboard, ArrowLeftRight, Settings } from 'lucide-react';
import logoImage from '../../assets/image.png'; 

const Sidebar = ({ activePage, onNavigate }) => {
  return (
<aside className="w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-colors duration-200">      
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <a 
          href="https://zorvyn.io/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          title="Visit Zorvyn Website"
        >
          <img 
            src={logoImage} 
            alt="Zorvyn Logo" 
            className="h-8 w-auto object-contain" 
          />
          {/* We added the text back here with dark mode colors! */}
          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
            Zorvyn
          </span>
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-6 px-3 flex flex-col gap-1">
        <button 
          onClick={() => onNavigate('dashboard')}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors duration-200 ${
            activePage === 'dashboard' 
              ? 'bg-gray-50 dark:bg-gray-700/50 text-indigo-600 dark:text-indigo-400' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </button>
        
        <button 
          onClick={() => onNavigate('transactions')}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors duration-200 ${
            activePage === 'transactions' 
              ? 'bg-gray-50 dark:bg-gray-700/50 text-indigo-600 dark:text-indigo-400' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          <ArrowLeftRight className="w-5 h-5" />
          Transactions
        </button>

        {/* Placeholder for future links */}
        <button 
          onClick={() => alert("Settings module coming soon!")}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100 rounded-lg font-medium transition-colors duration-200"
        >
          <Settings className="w-5 h-5" />
          Settings
        </button>
      </nav>

      {/* User Profile Area */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold">
            SK
          </div>
          <div className="flex flex-col text-left overflow-hidden">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Sanavi Kulkarni</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 truncate" title="sanavikulkarni.work@gmail.com">
              sanavikulkarni.work@gmail.com
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;