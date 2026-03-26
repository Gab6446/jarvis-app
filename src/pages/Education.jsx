import React from 'react';
import { BookOpen, AlertCircle, ShieldAlert, Heart, PlayCircle, ChevronRight, FileText } from 'lucide-react';

export default function Education() {
  const modules = [
    {
      title: "Recognizing Pregnancy Emergencies",
      category: "Critical Awareness",
      icon: ShieldAlert,
      color: "var(--danger-color)",
      bg: "var(--danger-light)",
      duration: "5 min read",
      description: "Learn the 7 major warning signs during pregnancy that require immediate use of the JARVIS SOS button."
    },
    {
      title: "First Responder CPR for Infants",
      category: "Video Guide",
      icon: PlayCircle,
      color: "var(--accent-color)",
      bg: "var(--accent-light)",
      duration: "12 min watch",
      description: "Essential life-saving techniques every parent and guardian should know before the ambulance arrives."
    },
    {
      title: "Managing Preeclampsia Risks",
      category: "Maternal Health",
      icon: Heart,
      color: "var(--secondary-color)",
      bg: "var(--secondary-light)",
      duration: "8 min read",
      description: "Understanding blood pressure spikes, recognizing symptoms early, and mitigating risks at home."
    },
    {
      title: "Preparing Your Emergency Go-Bag",
      category: "Preparation Checklist",
      icon: AlertCircle,
      color: "var(--warning-color)",
      bg: "var(--warning-light)",
      duration: "Interactive File",
      description: "A comprehensive checklist of what to pack for the hospital when you go into labor or during an emergency."
    }
  ];

  return (
    <div className="main-content">
      <header className="page-header" style={{ marginBottom: '2rem' }}>
        <h1 className="page-greeting" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <BookOpen color="var(--primary-color)" /> Public Awareness & Education
        </h1>
        <p className="page-subtitle">Life-saving information to empower you during health emergencies and your continuous maternal journey. Curated by top medical professionals.</p>
      </header>

      {/* Featured Alert Module */}
      <div style={{ backgroundColor: '#fff1f2', border: '2px solid #fda4af', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '3rem', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-block', backgroundColor: '#e11d48', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
            Featured Emergency Guide
          </div>
          <h2 style={{ fontSize: '1.75rem', color: '#881337', margin: '0 0 1rem 0' }}>How to React to Sudden Hemorrhage</h2>
          <p style={{ color: '#be123c', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Postpartum or antenatal hemorrhage requires immediate, coordinated response. Learn the exact elevation techniques and exactly when to hit the JARVIS Dispatch button to maximize your survival window.
          </p>
          <button className="btn btn-danger" style={{ padding: '0.75rem 1.5rem' }}>
            <FileText size={18} /> Read Complete Guide
          </button>
        </div>
        <div style={{ width: '300px', height: '200px', backgroundColor: '#fecdd3', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #f43f5e' }}>
          <PlayCircle size={48} color="#e11d48" />
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', color: '#2d3748', marginBottom: '1.5rem' }}>Essential Learning Modules</h2>
      
      <div className="grid grid-cols-2">
        {modules.map((mod, idx) => (
          <div key={idx} className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: mod.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <mod.icon size={24} color={mod.color} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', backgroundColor: 'var(--bg-color)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
                {mod.duration}
              </span>
            </div>
            
            <span style={{ fontSize: '0.75rem', color: mod.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              {mod.category}
            </span>
            <h3 style={{ fontSize: '1.25rem', color: '#2d3748', margin: '0 0 0.75rem 0' }}>{mod.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', flex: 1 }}>{mod.description}</p>
            
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.875rem' }}>
              Start Module <ChevronRight size={16} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
