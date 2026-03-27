import React from 'react';
import { PhoneCall, Heart, CalendarHeart, Sparkles, MapPin, Syringe, Info, ArrowRight, MessageSquare, Stethoscope, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard({ setCurrentPage }) {
  const { currentUser } = useAuth();
  return (
    <div className="main-content">
      
      {/* Personalized Greeting Header */}
      <header className="page-header">
        <h1 className="page-greeting">Good afternoon, {currentUser?.name || 'there'} 👋</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles color="var(--primary-color)" size={24} className="animate-float" />
          Ready to respond to any emergency, 24/7.
        </p>
      </header>

      <div className="grid grid-cols-3">
        
        {/* Quick Emergency Actions */}
        <div className="card glass-panel" style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#2d3748' }}>Quick Emergency Dispatch</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: 0 }}>
            Tap immediately if you or someone else is in immediate danger. We will route you to the nearest responder.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              style={{ flex: 1, minWidth: '150px', padding: '1.5rem', backgroundColor: '#fee2e2', border: '2px solid #ef4444', borderRadius: 'var(--radius-lg)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.2s', color: '#991b1b', fontWeight: 700 }}
              onClick={() => setCurrentPage('emergency')}
            >
              <div style={{ backgroundColor: '#ef4444', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                <Stethoscope size={32} />
              </div>
              Medical Emergency
            </button>
            <button 
              style={{ flex: 1, minWidth: '150px', padding: '1.5rem', backgroundColor: '#ffedd5', border: '2px solid #f97316', borderRadius: 'var(--radius-lg)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.2s', color: '#9a3412', fontWeight: 700 }}
              onClick={() => setCurrentPage('emergency')}
            >
              <div style={{ backgroundColor: '#f97316', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                <Info size={32} />
              </div>
              Fire Emergency
            </button>
            <button 
              style={{ flex: 1, minWidth: '150px', padding: '1.5rem', backgroundColor: '#e0f2fe', border: '2px solid #0ea5e9', borderRadius: 'var(--radius-lg)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.2s', color: '#075985', fontWeight: 700 }}
              onClick={() => setCurrentPage('emergency')}
            >
              <div style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                <PhoneCall size={32} />
              </div>
              Police SOS
            </button>
          </div>
        </div>

        {/* First Aid Tips */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--secondary-light) 0%, #f472b6 100%)', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-md)' }}>
              <Heart size={24} color="white" fill="white" />
            </div>
            <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'white' }}>First Aid Quick Tips</h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            While waiting for responders, here is what you can do for sudden cardiac arrest:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'white' }}></div>
              Call JARVIS SOS immediately
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'white' }}></div>
              Begin CPR (100-120 beats/min)
            </li>
          </ul>
          <button 
            style={{ 
              backgroundColor: 'white', border: 'none', color: '#db2777', 
              padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', 
              width: '100%', cursor: 'pointer', fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onClick={() => setCurrentPage('education')}
          >
            View More Guides <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Profile & Recent Activity */}
      <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: '#2d3748', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <User color="var(--primary-color)" /> Profile & Health Management
      </h3>
      
      <div className="grid grid-cols-2">
        <div className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 className="card-title">Manage Your Health</h2>
          
          <button 
            className="btn btn-outline" 
            style={{ width: '100%', justifyContent: 'flex-start', padding: '1rem' }}
            onClick={() => setCurrentPage('appointments')}
          >
            <CalendarHeart size={20} /> Upcoming Appointments
          </button>

          <button 
            className="btn btn-outline" 
            style={{ width: '100%', justifyContent: 'flex-start', padding: '1rem' }}
            onClick={() => setCurrentPage('records')}
          >
            <Stethoscope size={20} /> Review Medical Records
          </button>

          <button 
            className="btn btn-outline" 
            style={{ width: '100%', justifyContent: 'flex-start', padding: '1rem' }}
            onClick={() => setCurrentPage('settings')}
          >
            <User size={20} /> Update Emergency Profile
          </button>
        </div>

        <div className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', padding: '1.5rem' }}>
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '70px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Dec</span>
            <strong style={{ fontSize: '1.5rem', color: 'var(--primary-color)', lineHeight: 1 }}>05</strong>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <Syringe size={16} color="var(--accent-color)" />
              <strong style={{ fontSize: '1.1rem', color: '#2d3748' }}>Annual Physical Exam</strong>
            </div>
            <p style={{ fontSize: '0.9rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={14} /> General Hospital, Ikeja
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Action Banner - Clear, Prominent, but nicely integrated */}
      <div className="emergency-banner" style={{ marginTop: '3rem' }}>
        <div>
          <h2 style={{ color: 'var(--danger-dark)', fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info color="var(--danger-color)" /> We are here for you 24/7.
          </h2>
          <p style={{ color: 'var(--danger-color)', fontSize: '1rem', margin: 0, maxWidth: '600px' }}>
            If you experience unusual pain, bleeding, or suspect an emergency, JARVIS can instantly connect you to the nearest specialized response team.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            className="btn" 
            style={{ 
              backgroundColor: 'white', 
              color: 'var(--danger-dark)', 
              border: '2px solid transparent',
              boxShadow: 'var(--shadow-md)'
            }}
            onClick={() => setCurrentPage('emergency')}
          >
            <MapPin size={20} />
            Find Nearest Center
          </button>
          <button 
            className="btn btn-danger animate-pulse-danger"
            style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
            onClick={() => setCurrentPage('emergency')}
          >
            <PhoneCall size={24} />
            Call SOS Emergency
          </button>
        </div>
      </div>

    </div>
  );
}
