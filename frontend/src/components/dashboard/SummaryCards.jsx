// src/components/dashboard/SummaryCards.jsx
import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { Wallet, Briefcase, ShoppingBag } from 'lucide-react';

const SummaryCards = () => {
  const { transactions } = useDashboard();

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalBalance = totalIncome - totalExpenses;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Balance Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Wallet className="w-5 h-5 text-gray-400 dark:text-gray-500" strokeWidth={1.5} />
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">Total Balance</h3>
        </div>
        <p className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">{formatCurrency(totalBalance)}</p>
      </div>

      {/* Income Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Briefcase className="w-5 h-5 text-gray-400 dark:text-gray-500" strokeWidth={1.5} />
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">Total Income</h3>
        </div>
        <p className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">{formatCurrency(totalIncome)}</p>
      </div>

      {/* Expenses Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <ShoppingBag className="w-5 h-5 text-gray-400 dark:text-gray-500" strokeWidth={1.5} />
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">Total Expenses</h3>
        </div>
        <p className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">{formatCurrency(totalExpenses)}</p>
      </div>
    </div>
  );
};

export default SummaryCards;