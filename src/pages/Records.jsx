import React, { useState } from 'react';
import { Activity, Thermometer, Droplet, FilePlus, Printer, Share2, X, MapPin, Star, Clock, Building2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Records() {
  const { currentUser, addRecord } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    visitType: 'Annual Physical Exam',
    date: '',
    doctor: '',
    hospital: '',
    notes: ''
  });

  const userRecords = currentUser?.records || [];

  function handleSubmit(e) {
    e.preventDefault();
    addRecord(formData);
    setFormData({ visitType: 'Routine Antenatal Visit', date: '', doctor: '', hospital: '', notes: '' });
    setShowForm(false);
  }

  const hospitals = [
    {
      name: "Lagos University Teaching Hospital (LUTH)",
      location: "Idi-Araba, Surulere",
      distance: "3.2 km",
      specialties: ["Trauma ER", "Cardiology", "Blood Bank"],
      level: "Level 3 Trauma",
      rating: 4.7,
      available: true
    },
    {
      name: "General Hospital, Ikeja",
      location: "Opp. LTV, Ikeja",
      distance: "5.1 km",
      specialties: ["Emergency", "Surgery", "Lab"],
      level: "Level 2",
      rating: 4.3,
      available: true
    },
    {
      name: "Evercare Hospital Lekki",
      location: "Admiralty Way, Lekki Phase 1",
      distance: "12.4 km",
      specialties: ["Cardiology", "Neurology", "Advanced Imaging"],
      level: "Level 3 Premium",
      rating: 4.9,
      available: true
    },
    {
      name: "Federal Medical Centre, Ebute-Metta",
      location: "Ebute-Metta, Lagos Mainland",
      distance: "6.8 km",
      specialties: ["Internal Medicine", "Lab", "Pharmacy"],
      level: "Level 2",
      rating: 4.1,
      available: false
    }
  ];

  return (
    <div className="main-content">
      <header className="page-header flex-between">
        <div>
          <h1 className="page-title">Health Records</h1>
          <p className="page-subtitle">Unified Medical History & Referrals</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-outline">
            <Printer size={18} /> Print
          </button>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <FilePlus size={18} /> Add New Report
          </button>
        </div>
      </header>

      {/* Add Report Modal */}
      {showForm && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, backdropFilter: 'blur(4px)' }}>
          <div className="card" style={{ width: '100%', maxWidth: '550px', animation: 'slideUp 0.3s ease forwards' }}>
            <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
              <h2 className="card-title" style={{ margin: 0 }}>New Health Report</h2>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Visit Type</label>
                <select value={formData.visitType} onChange={e => setFormData({...formData, visitType: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: 'white' }}>
                  <option>Annual Physical Exam</option>
                  <option>Urgent Care Visit</option>
                  <option>Blood Work / Lab Test</option>
                  <option>Emergency Visit</option>
                  <option>Specialist Referral</option>
                  <option>Vaccination</option>
                </select>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Date</label>
                  <input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Doctor Name</label>
                  <input type="text" required placeholder="e.g., Dr. Olamide" value={formData.doctor} onChange={e => setFormData({...formData, doctor: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Hospital / Facility</label>
                <input type="text" required placeholder="e.g., General Hospital, Ikeja" value={formData.hospital} onChange={e => setFormData({...formData, hospital: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Clinical Notes</label>
                <textarea required placeholder="Summarize findings, prescriptions, or observations..." rows={4} value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Report</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3">
        
        {/* Patient Vitals Summary */}
        <div className="card glass-panel" style={{ gridColumn: 'span 1' }}>
          <h2 className="card-title" style={{ marginBottom: '1.5rem' }}>Current Vitals</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="flex-between">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ padding: '0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)' }}>
                  <Activity color="var(--primary-dark)" size={20} />
                </div>
                <span>Blood Pressure</span>
              </div>
              <strong style={{ fontSize: '1.25rem' }}>118/76</strong>
            </div>
            
            <div className="flex-between">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ padding: '0.5rem', backgroundColor: 'rgba(239,68,68,0.1)', borderRadius: 'var(--radius-sm)' }}>
                  <Thermometer color="var(--danger-dark)" size={20} />
                </div>
                <span>Temperature</span>
              </div>
              <strong style={{ fontSize: '1.25rem' }}>36.8°C</strong>
            </div>

            <div className="flex-between">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ padding: '0.5rem', backgroundColor: 'rgba(59,130,246,0.1)', borderRadius: 'var(--radius-sm)' }}>
                  <Droplet color="var(--secondary-color)" size={20} />
                </div>
                <span>Blood Type</span>
              </div>
              <strong style={{ fontSize: '1.25rem', color: 'var(--danger-color)' }}>{currentUser?.bloodType || 'O+'}</strong>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Active Allergies</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {currentUser?.allergies ? (
                currentUser.allergies.split(',').map((a, i) => (
                  <span key={i} className="badge badge-danger">{a.trim()}</span>
                ))
              ) : (
                <span className="badge badge-danger">Penicillin</span>
              )}
            </div>
          </div>
        </div>

        {/* Medical History Timeline */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h2 className="card-title" style={{ margin: 0 }}>Clinical History</h2>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => setShowForm(true)}>
              <FilePlus size={14} /> Add Record
            </button>
          </div>
          
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: '2px', backgroundColor: 'var(--border-color)' }}></div>
            
            {/* User-submitted records */}
            {userRecords.map((rec) => (
              <div key={rec.id} style={{ position: 'relative', marginBottom: '2rem' }}>
                <div style={{ position: 'absolute', left: '-1.5rem', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', border: '4px solid var(--surface-color)', transform: 'translateX(-4px)' }}></div>
                <div className="flex-between" style={{ marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '1rem' }}>{rec.visitType}</strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{rec.date}</span>
                </div>
                <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>{rec.doctor} • {rec.hospital}</p>
                <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                  {rec.notes}
                </div>
              </div>
            ))}

            {/* Default timeline items */}
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <div style={{ position: 'absolute', left: '-1.5rem', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', border: '4px solid var(--surface-color)', transform: 'translateX(-4px)' }}></div>
              <div className="flex-between" style={{ marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '1rem' }}>Urgent Care Visit</strong>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Yesterday, 10:00 AM</span>
              </div>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Dr. Olamide • General Hospital, Ikeja</p>
              <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                Patient presented with shortness of breath. Vitals stabilized. Prescribed inhaler.
              </div>
            </div>

            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <div style={{ position: 'absolute', left: '-1.5rem', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--border-color)', border: '4px solid var(--surface-color)', transform: 'translateX(-4px)' }}></div>
              <div className="flex-between" style={{ marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '1rem' }}>X-Ray (Chest)</strong>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Mar 15, 2026</span>
              </div>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Lagos University Teaching Hospital • Referred by Dr. Olamide</p>
              <button style={{ backgroundColor: 'transparent', border: '1px solid var(--border-color)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.75rem' }}>
                <Activity size={14} /> View Scan Report
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-1.5rem', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--border-color)', border: '4px solid var(--surface-color)', transform: 'translateX(-4px)' }}></div>
              <div className="flex-between" style={{ marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '1rem' }}>Initial Emergency Registration</strong>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Jan 20, 2026</span>
              </div>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>General Hospital, Ikeja</p>
              <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                Initial baseline investigations completed. Blood group {currentUser?.bloodType || 'O+'}, Allergies updated.
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Hospital Recommendations */}
      <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Building2 color="var(--primary-color)" size={24} /> Recommended Hospitals Near You
      </h2>
      <div className="grid grid-cols-2">
        {hospitals.map((h, idx) => (
          <div key={idx} className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0, animation: `slideUp 0.4s ease forwards ${idx * 0.1}s` }}>
            <div className="flex-between">
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: '#2d3748' }}>{h.name}</h3>
              <span style={{ 
                fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', 
                borderRadius: 'var(--radius-full)', 
                backgroundColor: h.available ? '#dcfce7' : '#fee2e2', 
                color: h.available ? '#166534' : '#991b1b' 
              }}>
                {h.available ? 'Available' : 'At Capacity'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={14} /> {h.location}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> {h.distance}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Star size={14} color="#fbbf24" /> {h.rating}</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {h.specialties.map((s, i) => (
                <span key={i} style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', color: '#475569', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', fontWeight: 600, border: '1px solid #e2e8f0' }}>
                  {s}
                </span>
              ))}
            </div>

            <div className="flex-between" style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600 }}>
                <ShieldCheck size={14} /> {h.level}
              </span>
              <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
