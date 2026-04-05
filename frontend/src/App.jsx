// src/App.jsx
import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import TransactionsPage from './pages/TransactionsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <Layout activePage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === 'dashboard' ? <DashboardPage /> : <TransactionsPage />}
    </Layout>
  );
}

export default App;