// src/pages/DashboardPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useDashboard } from '../context/DashboardContext';
import SummaryCards from '../components/dashboard/SummaryCards';
import DashboardInsights from '../components/dashboard/DashboardInsights';
import DashboardCharts from '../components/dashboard/DashboardCharts';

const DashboardPage = () => {
  const { isLoading } = useDashboard();

  // Show loading spinner while fetching data
  if (isLoading) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center text-gray-500 gap-4">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="text-sm font-medium animate-pulse">Loading dashboard data...</p>
      </div>
    );
  }

  // Render the dashboard with a smooth fade-in animation
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-8 max-w-7xl mx-auto"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight dark:text-white">Financial Overview</h1>
        <p className="text-gray-500 mt-1 dark:text-gray-400">Welcome back. Here is what's happening with your finances today.</p>
      </div>

      <SummaryCards />
      <DashboardInsights />
      <DashboardCharts />
      
    </motion.div>
  );
};

export default DashboardPage;