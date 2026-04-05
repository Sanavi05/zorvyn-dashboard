// src/context/DashboardContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialTransactions } from '../data/mockData';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [role, setRole] = useState('viewer');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API Fetch
  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const saved = localStorage.getItem('zorvyn_transactions');
        if (saved) {
          setTransactions(JSON.parse(saved));
        } else {
          setTransactions(initialTransactions);
        }
      } catch (error) {
        console.error("Failed to fetch mock data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // Save to Local Storage when transactions update
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('zorvyn_transactions', JSON.stringify(transactions));
    }
  }, [transactions, isLoading]);

  const addTransaction = async (newTransaction) => {
    // Simulate API Post request delay
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 400));
    setTransactions((prev) => [newTransaction, ...prev]);
    setIsLoading(false);
  };

  const toggleRole = () => setRole(prev => prev === 'viewer' ? 'admin' : 'viewer');

  return (
    <DashboardContext.Provider value={{ transactions, role, isLoading, addTransaction, toggleRole }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};