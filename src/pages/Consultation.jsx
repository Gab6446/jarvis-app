import React, { useState } from 'react';
import { Video, Phone, Paperclip, Send, UserCheck, Clock, Search, ShieldCheck } from 'lucide-react';

export default function Consultation() {
  const [message, setMessage] = useState('');
  
  return (
    <div className="main-content" style={{ padding: '0', display: 'flex', height: '100%', backgroundColor: 'var(--bg-color)' }}>
      
      {/* Sidebar: Active Specialists & History */}
      <div style={{ width: '320px', borderRight: '1px solid var(--border-color)', backgroundColor: 'var(--surface-color)', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#2d3748' }}>Telemedicine</h2>
          
          <div style={{ position: 'relative' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input type="text" placeholder="Find specialist or symptom..." style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', outline: 'none', backgroundColor: 'var(--bg-color)', fontSize: '0.875rem' }} />
          </div>
        </div>

        <div style={{ padding: '1.5rem', flex: 1, overflowY: 'auto' }}>
          <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.05em' }}>Available Now</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#fff9f5', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary-light)', cursor: 'pointer', marginBottom: '0.5rem' }}>
            <div style={{ position: 'relative' }}>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #10b981, #059669)', width: '40px', height: '40px', fontSize: '1rem' }}>Dr.A</div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', backgroundColor: '#10b981', border: '2px solid white', borderRadius: '50%' }}></div>
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#2d3748' }}>Dr. Amina Yusuf</h4>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--primary-dark)', fontWeight: 600 }}>Obstetrician</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', marginBottom: '0.5rem', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-color)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <div style={{ position: 'relative' }}>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', width: '40px', height: '40px', fontSize: '1rem' }}>Dr.O</div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', backgroundColor: '#10b981', border: '2px solid white', borderRadius: '50%' }}></div>
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#2d3748' }}>Dr. Oluwaseun</h4>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pediatrician</p>
            </div>
          </div>

          <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '2rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>Recent Consults</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 0', cursor: 'pointer' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              <Clock size={16} />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.875rem', color: '#2d3748' }}>Nutrition Advice</h4>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>March 12, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat/Video Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
        
        {/* Chat Header */}
        <header style={{ padding: '1.5rem 2rem', backgroundColor: 'var(--surface-color)', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="avatar" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>Dr.A</div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#2d3748', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Dr. Amina Yusuf <UserCheck size={16} color="#10b981" />
              </h2>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Senior Obstetrician • Lagos University Teaching Hosp.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)' }}>
              <Phone size={18} />
            </button>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-full)' }}>
              <Video size={18} /> Start Video Call
            </button>
          </div>
        </header>

        {/* Chat History */}
        <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ alignSelf: 'center', backgroundColor: '#e5e7eb', color: '#4b5563', padding: '0.25rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
            Today, 10:45 AM
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignSelf: 'flex-start', maxWidth: '70%' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem 1.25rem', borderRadius: '1rem 1rem 1rem 0', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)', color: '#2d3748' }}>
              Hello Aisha! How are you feeling today? I saw your gestational tracker updated to Week 24.
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>10:45 AM</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignSelf: 'flex-end', maxWidth: '70%' }}>
            <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '1rem 1.25rem', borderRadius: '1rem 1rem 0 1rem', boxShadow: '0 4px 14px rgba(251, 146, 60, 0.2)' }}>
              Hi Dr. Amina! I'm feeling good, but I've been experiencing some mild swelling in my ankles since yesterday.
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right' }}>10:48 AM</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignSelf: 'flex-start', maxWidth: '70%' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem 1.25rem', borderRadius: '1rem 1rem 1rem 0', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)', color: '#2d3748' }}>
              Mild swelling is perfectly normal at this stage, especially if you've been on your feet a lot. Try to elevate your legs when sitting and drink plenty of water (at least your recommended 2.5L). 
              <br/><br/>
              However, if the swelling reaches your hands or face, or if you feel a severe headache, I want you to hit the JARVIS Emergency SOS button immediately. Has your blood pressure been stable?
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>10:50 AM</span>
          </div>

        </div>

        {/* Chat Input */}
        <div style={{ padding: '1.5rem 2rem', backgroundColor: 'var(--surface-color)', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--bg-color)', padding: '0.5rem 0.5rem 0.5rem 1.5rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ flex: 1, backgroundColor: 'transparent', border: 'none', outline: 'none', fontSize: '1rem', color: 'var(--text-main)' }} 
            />
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.5rem' }}>
              <Paperclip size={20} />
            </button>
            <button className="btn btn-primary" style={{ padding: '0.75rem', borderRadius: '50%' }}>
              <Send size={18} />
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
             <ShieldCheck size={14} color="var(--primary-dark)" />
             <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>End-to-End Encrypted Medical Consultation</span>
          </div>
        </div>

      </div>
    </div>
  );
}
