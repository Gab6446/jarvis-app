import React, { useState } from 'react';
import { HeartPulse, CheckCircle2, User, Activity, ArrowRight, ArrowLeft, LogIn, Smile } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Onboarding({ setCurrentPage }) {
  const { register, login } = useAuth();
  const [mode, setMode] = useState('register');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const totalSteps = 3;

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [smoker, setSmoker] = useState('');
  const [exercise, setExercise] = useState('');
  const [wellnessGoal, setWellnessGoal] = useState('');
  const [preExisting, setPreExisting] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [allergies, setAllergies] = useState('');

  function handleLogin() {
    setError('');
    if (!name || !dob) { setError('Please enter your name and date of birth.'); return; }
    const user = login(name, dob);
    if (user) { setCurrentPage('dashboard'); }
    else { setError('No account found. Please register first.'); }
  }

  function handleComplete() {
    register({ name, dob, smoker, exercise, wellnessGoal, preExisting, bloodType, allergies });
    setCurrentPage('dashboard');
  }

  const input = { width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' };
  const select = { ...input, backgroundColor: 'white' };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--bg-color)', overflowY: 'auto' }}>

      <header style={{ padding: '2rem 3rem', display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 10 }}>
        {mode === 'register' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', maxWidth: '800px' }}>
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: step >= s ? 'var(--primary-color)' : 'var(--bg-color)', color: step >= s ? 'white' : 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, border: step >= s ? 'none' : '2px solid var(--border-color)', transition: 'all 0.3s' }}>
                  {step > s ? <CheckCircle2 size={16} /> : s}
                </div>
                {s < 3 && <div style={{ flex: 1, height: '4px', backgroundColor: step > s ? 'var(--primary-light)' : 'var(--bg-color)', borderRadius: '2px', transition: 'all 0.3s' }} />}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <LogIn size={24} color="var(--primary-color)" />
            <span style={{ fontWeight: 700, fontSize: '1.125rem', color: '#2d3748' }}>Welcome Back</span>
          </div>
        )}
      </header>

      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '3rem 2rem' }}>
        <div className="card glass-panel" style={{ width: '100%', maxWidth: '600px', alignSelf: 'flex-start', borderTop: '4px solid var(--primary-color)' }}>

          {/* LOGIN */}
          {mode === 'login' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <LogIn size={32} />
                </div>
              </div>
              <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#2d3748' }}>Login to JARVIS</h1>
              <p style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.125rem' }}>Enter the details you used when you registered.</p>
              {error && <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}
              <div className="grid">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Your Name</label>
                  <input type="text" placeholder="e.g., Aisha" value={name} onChange={e => setName(e.target.value)} style={input} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Date of Birth</label>
                  <input type="date" value={dob} onChange={e => setDob(e.target.value)} style={input} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                <button className="btn btn-primary" onClick={handleLogin} style={{ width: '100%' }}><LogIn size={18} /> Sign In</button>
                <button className="btn btn-outline" onClick={() => { setMode('register'); setError(''); }} style={{ width: '100%' }}>Don't have an account? Register</button>
              </div>
            </div>
          )}

          {/* STEP 1: Personal Info */}
          {mode === 'register' && step === 1 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <User size={32} />
                </div>
              </div>
              <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#2d3748' }}>Welcome to JARVIS</h1>
              <p style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.125rem' }}>Let's personalize your care journey.</p>
              <div className="grid">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Preferred Name</label>
                  <input type="text" placeholder="e.g., Aisha" value={name} onChange={e => setName(e.target.value)} style={input} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Date of Birth</label>
                  <input type="date" value={dob} onChange={e => setDob(e.target.value)} style={input} />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Health Profile / Lifestyle */}
          {mode === 'register' && step === 2 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#8b5cf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Smile size={32} />
                </div>
              </div>
              <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#2d3748' }}>Health Profile</h1>
              <p style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.125rem' }}>Tell us about your lifestyle so we can tailor your experience.</p>
              <div className="grid">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Do you smoke or use tobacco?</label>
                  <select value={smoker} onChange={e => setSmoker(e.target.value)} style={select}>
                    <option value="">Select...</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                    <option value="former">Former smoker</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>How often do you exercise?</label>
                  <select value={exercise} onChange={e => setExercise(e.target.value)} style={select}>
                    <option value="">Select...</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">A few times a week</option>
                    <option value="rarely">Rarely</option>
                    <option value="never">Never</option>
                  </select>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Primary wellness goal</label>
                  <select value={wellnessGoal} onChange={e => setWellnessGoal(e.target.value)} style={select}>
                    <option value="">Select...</option>
                    <option value="emergency">Emergency Preparedness</option>
                    <option value="chronic">Chronic Disease Management</option>
                    <option value="maternal">Maternal &amp; Family Health</option>
                    <option value="general">General Health Monitoring</option>
                    <option value="fitness">Fitness &amp; Active Lifestyle</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Medical History + Emergency Baselines (combined) */}
          {mode === 'register' && step === 3 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--danger-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Activity size={32} />
                </div>
              </div>
              <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#2d3748' }}>Medical Profile</h1>
              <p style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.125rem' }}>Critical details for first responders. Your data is encrypted.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Pre-existing Conditions</label>
                  <input type="text" placeholder="e.g., Asthma, Hypertension, Diabetes, None" value={preExisting} onChange={e => setPreExisting(e.target.value)} style={input} />
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>List any major chronic conditions or previous surgeries.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Blood Type</label>
                    <select value={bloodType} onChange={e => setBloodType(e.target.value)} style={select}>
                      <option value="">I don&apos;t know</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Known Allergies</label>
                    <input type="text" placeholder="e.g., Penicillin, Latex" value={allergies} onChange={e => setAllergies(e.target.value)} style={input} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          {mode === 'register' && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              {step > 1 ? (
                <button className="btn btn-outline" onClick={() => setStep(s => s - 1)}><ArrowLeft size={18} /> Back</button>
              ) : (
                <button className="btn btn-outline" onClick={() => setMode('login')}><LogIn size={18} /> Have an account? Login</button>
              )}
              <button className="btn btn-primary" onClick={() => { if (step < totalSteps) setStep(s => s + 1); else handleComplete(); }} style={{ boxShadow: 'var(--shadow-md)' }}>
                {step < totalSteps ? 'Continue' : 'Complete Setup'}
                {step < totalSteps ? <ArrowRight size={18} /> : <HeartPulse size={18} />}
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
