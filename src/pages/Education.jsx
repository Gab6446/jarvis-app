import React from 'react';
import { BookOpen, AlertCircle, ShieldAlert, Heart, PlayCircle, ChevronRight, FileText, Stethoscope, Activity, Wind } from 'lucide-react';

export default function Education() {
  const modules = [
    {
      title: "Heart Attack Warning Signs",
      category: "Critical Awareness",
      icon: ShieldAlert,
      color: "var(--danger-color)",
      bg: "var(--danger-light)",
      duration: "5 min read",
      description: "Learn the key warning signs of a heart attack — chest tightness, arm pain, nausea — and exactly when to trigger the JARVIS SOS button."
    },
    {
      title: "Adult CPR Step-by-Step",
      category: "Video Guide",
      icon: PlayCircle,
      color: "var(--accent-color)",
      bg: "var(--accent-light)",
      duration: "10 min watch",
      description: "Life-saving chest compression techniques every adult should know. Learn the 100-120 beats/min rhythm before the ambulance arrives."
    },
    {
      title: "Stroke: Act F.A.S.T.",
      category: "Emergency Response",
      icon: Activity,
      color: "#7c3aed",
      bg: "#ede9fe",
      duration: "4 min read",
      description: "Face drooping, Arm weakness, Speech difficulty, Time to call. Recognize stroke signs and take action within the critical 3-hour window."
    },
    {
      title: "Managing Hypertension at Home",
      category: "Chronic Disease",
      icon: Stethoscope,
      color: "#0ea5e9",
      bg: "#e0f2fe",
      duration: "8 min read",
      description: "Daily habits, dietary restrictions, and medication compliance that reduce risk of a hypertensive crisis and keep your readings in a healthy range."
    },
    {
      title: "Choking Response (Heimlich)",
      category: "First Aid",
      icon: Wind,
      color: "#f97316",
      bg: "#ffedd5",
      duration: "3 min read",
      description: "Step-by-step Heimlich maneuver for adults and children. Know when to apply back blows versus abdominal thrusts."
    },
    {
      title: "High-Risk Pregnancy Warning Signs",
      category: "Maternal Health",
      icon: Heart,
      color: "var(--secondary-color)",
      bg: "var(--secondary-light)",
      duration: "6 min read",
      description: "Preeclampsia, gestational diabetes, and fetal movement changes — warning signs every expectant mother and her family should recognize."
    },
    {
      title: "Build Your Emergency Kit",
      category: "Preparation Checklist",
      icon: AlertCircle,
      color: "var(--warning-color)",
      bg: "var(--warning-light)",
      duration: "Interactive File",
      description: "A comprehensive home emergency checklist — from first aid supplies and medication lists to evacuation routes and ICE contact cards."
    }
  ];

  return (
    <div className="main-content">
      <header className="page-header" style={{ marginBottom: '2rem' }}>
        <h1 className="page-greeting" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <BookOpen color="var(--primary-color)" /> Health Education & First Aid
        </h1>
        <p className="page-subtitle">Life-saving knowledge for any emergency. Curated by top medical professionals and updated regularly.</p>
      </header>

      {/* Featured Alert Module */}
      <div style={{ backgroundColor: '#fff1f2', border: '2px solid #fda4af', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '3rem', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-block', backgroundColor: '#e11d48', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
            Featured Emergency Guide
          </div>
          <h2 style={{ fontSize: '1.75rem', color: '#881337', margin: '0 0 1rem 0' }}>Responding to Sudden Cardiac Arrest</h2>
          <p style={{ color: '#be123c', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            When someone collapses unresponsive, every second counts. Learn exactly when to start CPR, how to use an AED, and how to coordinate with JARVIS Emergency Dispatch to maximize survival.
          </p>
          <button className="btn btn-danger" style={{ padding: '0.75rem 1.5rem' }}>
            <FileText size={18} /> Read Complete Guide
          </button>
        </div>
        <div style={{ width: '300px', height: '200px', backgroundColor: '#fecdd3', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #f43f5e' }}>
          <PlayCircle size={48} color="#e11d48" />
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', color: '#2d3748', marginBottom: '1.5rem' }}>Learning Modules</h2>
      
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
