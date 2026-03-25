import React, { useState } from 'react';
import { HeartPulse, CheckCircle2, User, Activity, CalendarDays, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Onboarding({ setCurrentPage }) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--bg-color)', overflowY: 'auto' }}>
      
      {/* Top Progress Header */}
      <header style={{ padding: '2rem 3rem', display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', maxWidth: '800px' }}>
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div style={{ 
                width: '32px', height: '32px', borderRadius: '50%', 
                backgroundColor: step >= s ? 'var(--primary-color)' : 'var(--bg-color)',
                color: step >= s ? 'white' : 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600,
                border: step >= s ? 'none' : '2px solid var(--border-color)',
                transition: 'all 0.3s'
              }}>
                {step > s ? <CheckCircle2 size={16} /> : s}
              </div>
              {s < 3 && (
                <div style={{ flex: 1, height: '4px', backgroundColor: step > s ? 'var(--primary-light)' : 'var(--bg-color)', borderRadius: '2px', transition: 'all 0.3s' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </header>

      {/* Form Content Area */}
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '3rem 2rem' }}>
        <div className="card glass-panel" style={{ width: '100%', maxWidth: '600px', alignSelf: 'flex-start', borderTop: '4px solid var(--primary-color)' }}>
          
          {step === 1 && (
            <div className="animate-float" style={{ animationTimingFunction: 'ease-out', animationDuration: '0.6s' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                 <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <User size={32} />
                 </div>
              </div>
              <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#2d3748' }}>Welcome to JARVIS</h1>
              <p style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.125rem' }}>Let's personalize your care journey. What should we call you?</p>
              
              <div className="grid">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Preferred Name</label>
                  <input type="text" placeholder="e.g., Aisha" defaultValue="Aisha" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Date of Birth</label>
                  <input type="date" defaultValue="1995-05-14" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }} />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-float" style={{ animationTimingFunction: 'ease-out', animationDuration: '0.6s' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                 <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--secondary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <CalendarDays size={32} />
                 </div>
              </div>
              <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#2d3748' }}>Your Pregnancy Journey</h1>
              <p style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.125rem' }}>This helps us calculate your timeline and milestone reminders.</p>
              
              <div className="grid">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>First day of last period (LMP)</label>
                  <input type="date" defaultValue="2025-12-25" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }} />
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Required to calculate gestational age reliably.</p>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Is this your first pregnancy?</label>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <label style={{ flex: 1, padding: '1rem', border: '2px solid var(--primary-color)', borderRadius: 'var(--radius-md)', textAlign: 'center', backgroundColor: 'var(--bg-color)', cursor: 'pointer', fontWeight: 600, color: 'var(--primary-dark)' }}>
                      <input type="radio" name="gravida" defaultChecked style={{ display: 'none' }} /> Yes
                    </label>
                    <label style={{ flex: 1, padding: '1rem', border: '2px solid var(--border-color)', borderRadius: 'var(--radius-md)', textAlign: 'center', cursor: 'pointer', color: 'var(--text-muted)' }}>
                      <input type="radio" name="gravida" style={{ display: 'none' }} /> No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-float" style={{ animationTimingFunction: 'ease-out', animationDuration: '0.6s' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                 <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--danger-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <Activity size={32} />
                 </div>
              </div>
              <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#2d3748' }}>Emergency Baselines</h1>
              <p style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.125rem' }}>Critical data for first responders. Your data is encrypted.</p>
              
              <div className="grid">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Blood Type</label>
                  <select defaultValue="O+" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', outline: 'none', fontFamily: 'inherit', backgroundColor: 'white' }}>
                    <option value="">I don't know</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Known Allergies</label>
                  <input type="text" placeholder="e.g., Penicillin, Latex" defaultValue="Penicillin" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', outline: 'none' }} />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            {step > 1 ? (
              <button 
                className="btn btn-outline" 
                onClick={() => setStep(s => s - 1)}
              >
                <ArrowLeft size={18} /> Back
              </button>
            ) : <div />}

            <button 
              className="btn btn-primary" 
              onClick={() => {
                if(step < totalSteps) setStep(s => s + 1);
                else setCurrentPage('dashboard');
              }}
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              {step < totalSteps ? 'Continue' : 'Complete Setup'} 
              {step < totalSteps ? <ArrowRight size={18} /> : <HeartPulse size={18} />}
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
