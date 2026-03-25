import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Emergency from './pages/Emergency';
import Records from './pages/Records';
import Onboarding from './pages/Onboarding';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('onboarding');

  return (
    <div className="app-container">
      {currentPage !== 'onboarding' && <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      
      {/* Dynamic Page Rendering */}
      {currentPage === 'onboarding' && <Onboarding setCurrentPage={setCurrentPage} />}
      {currentPage === 'dashboard' && <Dashboard setCurrentPage={setCurrentPage} />}
      {currentPage === 'emergency' && <Emergency />}
      {currentPage === 'records' && <Records />}
      {currentPage === 'consult' && (
        <div className="main-content flex-center">
          <div className="card glass-panel" style={{ textAlign: 'center', maxWidth: '400px' }}>
            <h2 className="card-title" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
              Telemedicine Consultation
            </h2>
            <p>Connect with available specialists via video or text.</p>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)', margin: '1rem 0' }}>
              <span className="status-dot active"></span> <span style={{ marginLeft: '0.5rem' }}>3 Specialists Online</span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Start Consultation</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
