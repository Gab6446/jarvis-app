import React from 'react';
import { User, Bell, Shield, Key, HeartPulse, CreditCard, ChevronRight } from 'lucide-react';

export default function Settings() {
  return (
    <div className="main-content" style={{ padding: '0', backgroundColor: 'var(--bg-color)' }}>
      <header style={{ padding: '2.5rem', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--surface-color)' }}>
        <h1 className="page-title" style={{ margin: 0 }}>Account Settings</h1>
        <p className="page-subtitle" style={{ margin: 0 }}>Manage your JARVIS profile, emergency contacts, and app preferences.</p>
      </header>

      <div style={{ padding: '2.5rem', display: 'flex', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Settings Navigation */}
        <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button className="btn" style={{ justifyContent: 'flex-start', padding: '1rem', backgroundColor: 'var(--primary-light)', color: 'white', borderRadius: 'var(--radius-md)' }}>
            <User size={20} /> Personal Profile
          </button>
          <button className="btn" style={{ justifyContent: 'flex-start', padding: '1rem', backgroundColor: 'transparent', color: 'var(--text-main)', borderRadius: 'var(--radius-md)', border: '1px solid transparent' }} onMouseEnter={(e) => Object.assign(e.currentTarget.style, { backgroundColor: 'white', border: '1px solid var(--border-color)' })} onMouseLeave={(e) => Object.assign(e.currentTarget.style, { backgroundColor: 'transparent', border: '1px solid transparent' })}>
            <HeartPulse size={20} color="var(--danger-color)" /> Emergency Medical Baselines
          </button>
          <button className="btn" style={{ justifyContent: 'flex-start', padding: '1rem', backgroundColor: 'transparent', color: 'var(--text-main)', borderRadius: 'var(--radius-md)', border: '1px solid transparent' }} onMouseEnter={(e) => Object.assign(e.currentTarget.style, { backgroundColor: 'white', border: '1px solid var(--border-color)' })} onMouseLeave={(e) => Object.assign(e.currentTarget.style, { backgroundColor: 'transparent', border: '1px solid transparent' })}>
            <Shield size={20} color="var(--accent-color)" /> Emergency Next-of-Kin
          </button>
          <button className="btn" style={{ justifyContent: 'flex-start', padding: '1rem', backgroundColor: 'transparent', color: 'var(--text-main)', borderRadius: 'var(--radius-md)', border: '1px solid transparent' }} onMouseEnter={(e) => Object.assign(e.currentTarget.style, { backgroundColor: 'white', border: '1px solid var(--border-color)' })} onMouseLeave={(e) => Object.assign(e.currentTarget.style, { backgroundColor: 'transparent', border: '1px solid transparent' })}>
            <Bell size={20} color="var(--warning-color)" /> Notifications & Reminders
          </button>
          <button className="btn" style={{ justifyContent: 'flex-start', padding: '1rem', backgroundColor: 'transparent', color: 'var(--text-main)', borderRadius: 'var(--radius-md)', border: '1px solid transparent' }} onMouseEnter={(e) => Object.assign(e.currentTarget.style, { backgroundColor: 'white', border: '1px solid var(--border-color)' })} onMouseLeave={(e) => Object.assign(e.currentTarget.style, { backgroundColor: 'transparent', border: '1px solid transparent' })}>
            <Key size={20} /> Security & Data
          </button>
        </div>

        {/* Dynamic Settings Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="card glass-panel">
            <h2 className="card-title">Profile Information</h2>
            <div className="grid grid-cols-2">
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-muted)' }}>First Name</label>
                <input type="text" defaultValue="Aisha" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Last Name</label>
                <input type="text" defaultValue="Bello" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email Address</label>
                <input type="email" defaultValue="aisha.bello@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }} />
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Save Changes</button>
            </div>
          </div>

          <div className="card glass-panel" style={{ borderTop: '4px solid var(--danger-light)' }}>
            <h2 className="card-title" style={{ color: 'var(--danger-dark)' }}><HeartPulse /> Emergency Next-of-Kin</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>These contacts will be automatically notified if you trigger the SOS Emergency action.</p>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div>
                <h4 style={{ margin: 0, color: '#2d3748' }}>Ibrahim Bello</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Husband • +234 803 123 4567</p>
              </div>
              <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>Edit</button>
            </div>

            <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem', borderStyle: 'dashed' }}>
              + Add Another Contact
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
