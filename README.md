# Zorvyn Finance Dashboard

A responsive, interactive finance dashboard built for the Zorvyn frontend developer evaluation. This project focuses on clean UI/UX, modular component architecture, and robust state management without relying on a backend.

## Live Demo
(If deployed, insert link here)

## Key Features & Implementation

This application was built from scratch to satisfy the core requirements and several optional enhancements. The data and context are localized for the Indian market (INR).

### 1. Dashboard Overview & Insights
* Summary Metrics: Dynamic calculation of Total Balance, Income, and Expenses based on global state.
* Data Visualization: Integrated Recharts for highly responsive, declarative charting. Includes a Time-Based Area Chart (Cash Flow) and a Categorical Doughnut Chart (Spending Breakdown).
* Smart Insights: An algorithmically driven section that analyzes transaction data to provide natural-language insights, such as Highest Spending Category and Savings Health.

### 2. Transactions & Data Management
* Interactive Table: A custom-built table component featuring real-time search filtering (by description or category) and type filtering (Income/Expense/All).
* Empty States: Graceful handling of empty search results to ensure a premium user experience.

### 3. Role-Based Access Control (RBAC) Simulation
* Global Role State: Managed via React Context API.
* Admin vs. Viewer: A toggle in the header allows the user to switch roles. When set to 'Admin', protected UI elements (like the "Add Transaction" button) become accessible.
* Transaction Entry: Admins can open a modal to add new transactions. Submitting the form updates the global Context, immediately recalculating all charts, insights, and summary cards across the application.

## Technical Architecture

* Framework: React (bootstrapped with Vite for optimal developer experience and build speed).
* Styling: Tailwind CSS. Chosen for rapid UI development, consistent design tokens, and easy responsive design implementation (mobile-first approach).
* Icons: Lucide React for clean, consistent, and lightweight vector graphics.
* State Management: React Context API. Used to avoid prop-drilling for global data (transactions list, current user role) while keeping the bundle size small.
* Directory Structure: Highly modular, separating concerns into components (UI vs. layout vs. domain-specific), context, pages, and utils.

## Getting Started

### Prerequisites
* Node.js (v16 or higher recommended)

### Installation

1. Clone the repository:
   git clone <your-repo-link>

2. Navigate into the directory:
   cd frontend

3. Install the dependencies:
   npm install

4. Start the development server:
   npm run dev

## Evaluation Criteria Addressed

* Design & UX: Minimalist design inspired by modern fintech platforms. Utilizes subtle hover states, clean typography, and accessible color palettes.
* Responsiveness: Fully responsive grid layouts that adapt seamlessly from mobile to desktop.
* Technical Quality: Modular component structure. Logic is separated from presentation where possible.
* State Management: Effective use of Context for global state and useState/useMemo for local component UI state and heavy calculations.