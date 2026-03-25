import React, { useEffect, useState } from 'react';
import { PhoneCall, Heart, CalendarHeart, Sparkles, MapPin, Syringe, Info, ArrowRight } from 'lucide-react';

export default function Dashboard({ setCurrentPage }) {
  const [progress, setProgress] = useState(0);

  // Animate the circular progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(60); // 24 weeks / 40 weeks = 60%
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="main-content">
      
      {/* Personalized Greeting Header */}
      <header className="page-header">
        <h1 className="page-greeting">Good afternoon, Aisha 👋</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles color="var(--primary-color)" size={24} className="animate-float" />
          Your baby is growing beautifully today!
        </p>
      </header>

      <div className="grid grid-cols-3">
        
        {/* Visual Pregnancy Progress */}
        <div className="card glass-panel" style={{ gridColumn: 'span 2', display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', width: '160px', height: '160px', flexShrink: 0 }}>
            <svg height="160" width="160">
              <circle stroke="var(--border-color)" strokeWidth="12" fill="transparent" r={radius} cx="80" cy="80" />
              <circle
                className="progress-ring__circle"
                stroke="var(--primary-color)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="transparent"
                r={radius}
                cx="80"
                cy="80"
                style={{ strokeDasharray: circumference, strokeDashoffset }}
              />
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Heart color="var(--secondary-color)" size={32} fill="var(--secondary-color)" className="animate-float" style={{ animationDelay: '1s' }} />
              <div style={{ marginTop: '0.25rem', textAlign: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>W24</span>
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#2d3748' }}>Second Trimester</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Your little one is now alongside the size of an ear of corn. Organ development is rapidly progressing!
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', flex: 1 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                  <CalendarHeart size={14} /> Due Date
                </span>
                <strong style={{ fontSize: '1.125rem', color: '#2d3748' }}>Oct 12, 2026</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: 'var(--primary-light)', color: 'white', borderRadius: 'var(--radius-md)', flex: 1 }}>
                <span style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                  Countdown
                </span>
                <strong style={{ fontSize: '1.25rem' }}>112 Days</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Nutritional Advice (Warm & Friendly) */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--secondary-light) 0%, #f472b6 100%)', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '1.5rem' }}>🥑</span>
            </div>
            <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'white' }}>Daily Nourishment</h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            At Week 24, iron and calcium are your best friends for strong bone development.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'white' }}></div>
              Include spinach or dark greens
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'white' }}></div>
              Drink at least 2.5L of water
            </li>
          </ul>
          <button style={{ 
            backgroundColor: 'white', border: 'none', color: '#db2777', 
            padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', 
            width: '100%', cursor: 'pointer', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            View Full Meal Plan <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Upcoming Reminders Section */}
      <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: '#2d3748', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <CalendarHeart color="var(--primary-color)" /> What's Next on Your Journey
      </h3>
      
      <div className="grid grid-cols-2">
        <div className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', padding: '1.5rem' }}>
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '70px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Apr</span>
            <strong style={{ fontSize: '1.5rem', color: 'var(--primary-color)', lineHeight: 1 }}>02</strong>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <Syringe size={16} color="var(--accent-color)" />
              <strong style={{ fontSize: '1.1rem', color: '#2d3748' }}>Tetanus Toxoid Vaccine</strong>
            </div>
            <p style={{ fontSize: '0.9rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={14} /> General Hospital, Ikeja
            </p>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', padding: '1.5rem' }}>
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '70px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Apr</span>
            <strong style={{ fontSize: '1.5rem', color: 'var(--primary-color)', lineHeight: 1 }}>15</strong>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <Heart size={16} color="var(--secondary-color)" />
              <strong style={{ fontSize: '1.1rem', color: '#2d3748' }}>Routine Antenatal</strong>
            </div>
            <p style={{ fontSize: '0.9rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={14} /> LUTH
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
