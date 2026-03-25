import React, { useState, useEffect } from 'react';
import { ShieldAlert, Navigation, Phone, Car, MapPin, Activity, ShieldCheck, HeartPulse, Hospital, Clock } from 'lucide-react';

export default function Emergency() {
  const [dispatchStatus, setDispatchStatus] = useState('locating'); // locating, dispatching, en-route
  const [etaTimer, setEtaTimer] = useState(8); 

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setDispatchStatus('dispatching');
    }, 2000);
    
    const timer2 = setTimeout(() => {
      setDispatchStatus('en-route');
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="main-content" style={{ padding: 0, position: 'relative', overflow: 'hidden', backgroundColor: '#111827' }}>
      
      {/* Top Warning Banner */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 40, backgroundColor: 'var(--danger-color)', color: 'white', padding: '0.75rem', textAlign: 'center', fontWeight: 700, letterSpacing: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: '0 4px 20px rgba(225,29,72,0.5)' }}>
        <ShieldAlert size={20} className="animate-pulse-danger" style={{ borderRadius: '50%' }} />
        EMERGENCY ACTIVE — MEDICAL RESPONSE COORDINATED
      </div>

      {/* Dark Map Simulator Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Map Grid Pattern */}
        <div style={{ 
          width: '100%', height: '100%', 
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
        }} />

        {/* User Location Node (Pulsing Red) */}
        <div style={{ 
          position: 'absolute', top: '45%', left: '60%', transform: 'translate(-50%, -50%)', zIndex: 2
        }}>
          <div className="animate-pulse-danger" style={{ 
            width: '32px', height: '32px', backgroundColor: 'var(--danger-color)', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 30px rgba(225,29,72,0.8)'
          }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%' }} />
          </div>
          <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '0.5rem', backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', whiteSpace: 'nowrap', fontWeight: 600 }}>
            Your Location
          </div>
        </div>

        {/* Hospital Location Node */}
        <div style={{ 
          position: 'absolute', top: '20%', left: '80%', transform: 'translate(-50%, -50%)', zIndex: 2
        }}>
          <div style={{ 
            width: '40px', height: '40px', backgroundColor: '#10b981', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(16,185,129,0.5)', border: '2px solid white'
          }}>
            <Hospital color="white" size={20} />
          </div>
        </div>

        {/* Animated Map Route SVG */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
          {/* Target Route (User to Hospital) */}
          <path d="M 60% 45% Q 70% 25% 80% 20%" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" strokeDasharray="10 10" />
          
          {/* Ambulance Route (Incoming) */}
          {dispatchStatus !== 'locating' && (
            <path 
              d="M 20% 70% C 30% 60%, 45% 75%, 60% 45%" 
              fill="none" 
              stroke="var(--accent-color)" 
              strokeWidth="6" 
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: dispatchStatus === 'en-route' ? '0' : '1000',
                transition: 'stroke-dashoffset 4s linear'
              }}
            />
          )}
        </svg>

        {/* Ambulance Marker */}
        <div style={{ 
          position: 'absolute', top: '70%', left: '20%', transform: 'translate(-50%, -50%)', zIndex: 3,
          transition: 'all 4s linear',
          ...(dispatchStatus === 'en-route' ? { top: '45%', left: '60%' } : {})
        }}>
          {dispatchStatus !== 'locating' && (
            <div style={{ 
              backgroundColor: 'white', padding: '0.5rem', borderRadius: '50%',
              boxShadow: '0 0 20px rgba(255,255,255,0.8)', color: 'var(--accent-color)',
              border: '3px solid var(--accent-color)'
            }}>
              <Car size={24} />
            </div>
          )}
        </div>
      </div>

      {/* UI Overlay - High contrast glass panels */}
      <div style={{ 
        position: 'relative', zIndex: 10, padding: '5rem 2.5rem 2.5rem 2.5rem', height: '100%', 
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        pointerEvents: 'none'
      }}>
        
        {/* Huge ETA Display */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', pointerEvents: 'auto' }}>
          <div style={{ 
            background: 'rgba(17, 24, 39, 0.85)', backdropFilter: 'blur(20px)', 
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem',
            padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>
                {dispatchStatus === 'locating' ? 'Calculating ETA...' : (dispatchStatus === 'dispatching' ? 'Ambulance Assigned' : 'Ambulance Arriving In')}
              </p>
              {dispatchStatus === 'en-route' ? (
                <h1 style={{ fontSize: '4.5rem', color: 'white', margin: 0, lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  {etaTimer} <span style={{ fontSize: '2rem', color: 'var(--accent-color)', fontWeight: 500 }}>mins</span>
                </h1>
              ) : (
                <div style={{ height: '4.5rem', display: 'flex', alignItems: 'center' }}>
                  <div className="animate-pulse-danger" style={{ width: '15px', height: '15px', backgroundColor: 'var(--danger-color)', borderRadius: '50%', margin: '0.5rem' }} />
                  <div className="animate-pulse-danger" style={{ width: '15px', height: '15px', backgroundColor: 'var(--danger-color)', borderRadius: '50%', margin: '0.5rem', animationDelay: '0.2s' }} />
                  <div className="animate-pulse-danger" style={{ width: '15px', height: '15px', backgroundColor: 'var(--danger-color)', borderRadius: '50%', margin: '0.5rem', animationDelay: '0.4s' }} />
                </div>
              )}
            </div>
            
            {dispatchStatus === 'en-route' && (
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                <p style={{ color: 'white', margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Unit L-042</p>
                <p style={{ color: 'var(--accent-light)', margin: 0, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={14} /> Basic Life Support
                </p>
                <button className="btn" style={{ backgroundColor: 'white', color: 'black', marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  <Phone size={14} /> Contact Paramedic
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Cards: Process & Hospital Selection */}
        <div className="grid grid-cols-2" style={{ alignItems: 'flex-end', pointerEvents: 'auto', gap: '2rem' }}>
          
          {/* Dispatch Status Timeline Card */}
          <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <h2 style={{ fontSize: '1.25rem', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#111827' }}>
              <Clock color="var(--primary-color)" /> Live Response Status
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
              {/* Timeline Line */}
              <div style={{ position: 'absolute', top: '10px', bottom: '10px', left: '11px', width: '2px', backgroundColor: '#e5e7eb', zIndex: 0 }} />
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1, opacity: 1 }}>
                <div style={{ backgroundColor: 'var(--accent-color)', padding: '4px', borderRadius: '50%', border: '4px solid white', marginTop: '2px' }}>
                  <ShieldCheck size={12} color="white" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#111827' }}>Distress Signal Received</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Maternal profile #A294 transmitted.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1, opacity: dispatchStatus !== 'locating' ? 1 : 0.4 }}>
                <div style={{ backgroundColor: dispatchStatus !== 'locating' ? 'var(--accent-color)' : '#9ca3af', padding: '4px', borderRadius: '50%', border: '4px solid white', marginTop: '2px' }}>
                   <Hospital size={12} color="white" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#111827' }}>Locating Nearest Hospital</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Referral confirmed based on medical needs.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1, opacity: dispatchStatus === 'en-route' ? 1 : 0.4 }}>
                <div style={{ backgroundColor: dispatchStatus === 'en-route' ? 'var(--danger-color)' : '#9ca3af', padding: '4px', borderRadius: '50%', border: '4px solid white', marginTop: '2px', boxShadow: dispatchStatus === 'en-route' ? '0 0 10px rgba(225,29,72,0.5)' : 'none' }}>
                  <Car size={12} color="white" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: dispatchStatus === 'en-route' ? 'var(--danger-color)' : '#111827' }}>Ambulance En-Route</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Keep pathways clear. Have ID ready.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Selection Reasoning Card */}
          <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', borderTop: '4px solid #10b981' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: 0, color: '#111827', fontSize: '1.25rem' }}>Lagos Island Maternity Hospital</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Navigation size={14} /> Broad Street (4.2km away)
                </p>
              </div>
              <div style={{ backgroundColor: '#ecfdf5', color: '#059669', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700 }}>
                Matched
              </div>
            </div>
            
            <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
              <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <HeartPulse size={16} /> Why this hospital was selected:
              </h4>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
                    Level 3 Maternity Center
                  </span>
                  <span style={{ color: '#10b981', fontSize: '0.75rem' }}>Confirmed</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
                    Blood Bank Available
                  </span>
                  <span style={{ color: '#10b981', fontSize: '0.75rem' }}>In Stock</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
                    NICU Ready 
                  </span>
                  <span style={{ color: '#10b981', fontSize: '0.75rem' }}>2 Beds Empty</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
