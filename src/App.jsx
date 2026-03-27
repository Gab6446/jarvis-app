import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Dashboard from './pages/Dashboard';
import Emergency from './pages/Emergency';
import Records from './pages/Records';
import Onboarding from './pages/Onboarding';
import Settings from './pages/Settings';
import Consultation from './pages/Consultation';
import Education from './pages/Education';
import MealPlan from './pages/MealPlan';
import Notifications from './pages/Notifications';
import Community from './pages/Community';
import Appointments from './pages/Appointments';
import 'leaflet/dist/leaflet.css';
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
      {currentPage !== 'onboarding' && (
        <>
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} userName={currentUser?.name} onLogout={handleLogout} />
          <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
      
      {currentPage === 'onboarding' && <Onboarding setCurrentPage={setCurrentPage} />}
      {currentPage === 'dashboard' && <Dashboard setCurrentPage={setCurrentPage} />}
      {currentPage === 'emergency' && <Emergency />}
      {currentPage === 'records' && <Records />}
      {currentPage === 'consult' && <Consultation />}
      {currentPage === 'education' && <Education />}
      {currentPage === 'mealplan' && <MealPlan />}
      {currentPage === 'notifications' && <Notifications />}
      {currentPage === 'community' && <Community />}
      {currentPage === 'appointments' && <Appointments />}
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
