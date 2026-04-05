// src/components/dashboard/DashboardInsights.jsx
import React, { useMemo } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { Lightbulb, Target, AlertCircle } from 'lucide-react';

const DashboardInsights = () => {
  const { transactions } = useDashboard();

  const insights = useMemo(() => {
    const expenses = transactions.filter(t => t.type === 'expense');
    const income = transactions.filter(t => t.type === 'income');
    
    const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);
    const totalIncome = income.reduce((sum, t) => sum + t.amount, 0);

    const categoryTotals = expenses.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});
    
    const highestCategory = Object.entries(categoryTotals)
      .sort((a, b) => b[1] - a[1])[0];

    let savingsRate = 0;
    if (totalIncome > 0) {
      savingsRate = (((totalIncome - totalExpenses) / totalIncome) * 100).toFixed(0);
    }

    const categoryCounts = expenses.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + 1;
      return acc;
    }, {});
    
    const mostFrequentCategory = Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1])[0];

    const formatCurrency = (amount) => 
      new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

    return {
      topCategoryName: highestCategory ? highestCategory[0] : 'N/A',
      topCategoryAmount: highestCategory ? formatCurrency(highestCategory[1]) : '₹0',
      savingsRate,
      frequentCategoryName: mostFrequentCategory ? mostFrequentCategory[0] : 'N/A',
      frequentCategoryCount: mostFrequentCategory ? mostFrequentCategory[1] : 0,
    };
  }, [transactions]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-8 transition-colors duration-200">
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-6 py-4 flex items-center gap-2 transition-colors duration-200">
        <Lightbulb className="w-5 h-5 text-amber-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Smart Insights</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
        <div className="p-6 flex flex-col gap-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-200">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Top Spend</span>
          </div>
          <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
            Your highest spending category is <span className="font-semibold text-indigo-600 dark:text-indigo-400">{insights.topCategoryName}</span>, totaling <span className="font-semibold">{insights.topCategoryAmount}</span>.
          </p>
        </div>

        <div className="p-6 flex flex-col gap-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-200">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Savings Health</span>
          </div>
          <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
            You are currently retaining <span className="font-semibold text-emerald-600 dark:text-emerald-400">{insights.savingsRate}%</span> of your income after expenses.
          </p>
        </div>

        <div className="p-6 flex flex-col gap-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-200">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Habit Check</span>
          </div>
          <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
            You make frequent purchases in <span className="font-semibold text-rose-600 dark:text-rose-400">{insights.frequentCategoryName}</span> ({insights.frequentCategoryCount} transactions). Consider setting a budget here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardInsights;