import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Emergency from './pages/Emergency';
import Records from './pages/Records';
import Onboarding from './pages/Onboarding';
import Settings from './pages/Settings';
import Consultation from './pages/Consultation';
import Education from './pages/Education';
import MealPlan from './pages/MealPlan';
import './index.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('onboarding');
  const { currentUser, logout } = useAuth();

  function handleLogout() {
    logout();
    setCurrentPage('onboarding');
  }

  return (
    <div className="app-container">
      {currentPage !== 'onboarding' && <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} userName={currentUser?.name} onLogout={handleLogout} />}
      
      {/* Dynamic Page Rendering */}
      {currentPage === 'onboarding' && <Onboarding setCurrentPage={setCurrentPage} />}
      {currentPage === 'dashboard' && <Dashboard setCurrentPage={setCurrentPage} />}
      {currentPage === 'emergency' && <Emergency />}
      {currentPage === 'records' && <Records />}
      {currentPage === 'consult' && <Consultation />}
      {currentPage === 'education' && <Education />}
      {currentPage === 'mealplan' && <MealPlan />}
      {currentPage === 'settings' && <Settings />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
