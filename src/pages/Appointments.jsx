import React, { useState } from 'react';
import { CalendarPlus, MapPin, Clock, Building2, CheckCircle2, Star, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const hospitals = [
  { id: 1, name: "Lagos University Teaching Hospital (LUTH)", location: "Idi-Araba, Surulere", rating: 4.7 },
  { id: 2, name: "General Hospital, Ikeja", location: "Opp. LTV, Ikeja", rating: 4.3 },
  { id: 3, name: "Evercare Hospital Lekki", location: "Admiralty Way, Lekki Phase 1", rating: 4.9 },
  { id: 4, name: "Federal Medical Centre, Ebute-Metta", location: "Ebute-Metta, Lagos Mainland", rating: 4.1 }
];

const visitTypes = [
  "Routine Antenatal Visit",
  "Ultrasound Scan",
  "Lab Work / Blood Test",
  "Specialist Consultation",
  "Vaccination",
  "Follow-up Visit"
];

export default function Appointments() {
  const { currentUser, updateUser } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    hospital: '',
    visitType: '',
    date: '',
    time: '',
    notes: ''
  });

  const appointments = currentUser?.appointments || [];

  function handleBook(e) {
    e.preventDefault();
    const hospitalObj = hospitals.find(h => h.name === formData.hospital);
    const newAppointment = {
      id: Date.now().toString(),
      ...formData,
      hospitalLocation: hospitalObj?.location || '',
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    const updated = [newAppointment, ...appointments];
    updateUser({ appointments: updated });
    setFormData({ hospital: '', visitType: '', date: '', time: '', notes: '' });
    setShowForm(false);
  }

  return (
    <div className="main-content">
      <header className="page-header">
        <div className="flex-between">
          <div>
            <h1 className="page-greeting" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CalendarPlus color="var(--primary-color)" /> Appointments
            </h1>
            <p className="page-subtitle">Schedule and manage your hospital visits.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <CalendarPlus size={18} /> Book Appointment
          </button>
        </div>
      </header>

      {/* Booking Modal */}
      {showForm && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, backdropFilter: 'blur(4px)' }}>
          <div className="card" style={{ width: '100%', maxWidth: '550px', animation: 'slideUp 0.3s ease forwards' }}>
            <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
              <h2 className="card-title" style={{ margin: 0 }}>Book an Appointment</h2>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleBook} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Select Hospital</label>
                <select required value={formData.hospital} onChange={e => setFormData({...formData, hospital: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: 'white' }}>
                  <option value="">Choose a hospital...</option>
                  {hospitals.map(h => (
                    <option key={h.id} value={h.name}>{h.name} — ⭐ {h.rating}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Visit Type</label>
                <select required value={formData.visitType} onChange={e => setFormData({...formData, visitType: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: 'white' }}>
                  <option value="">Select visit type...</option>
                  {visitTypes.map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Preferred Date</label>
                  <input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Preferred Time</label>
                  <input type="time" required value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', fontFamily: 'inherit' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Notes (Optional)</label>
                <textarea placeholder="Any specific concerns or requests..." rows={3} value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upcoming Appointments */}
      {appointments.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {appointments.map((apt, idx) => (
            <div key={apt.id} className="card glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', opacity: 0, animation: `slideUp 0.4s ease forwards ${idx * 0.05}s` }}>
              <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '70px', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {new Date(apt.date).toLocaleDateString('en-US', { month: 'short' })}
                </span>
                <strong style={{ fontSize: '1.5rem', color: 'var(--primary-color)', lineHeight: 1 }}>
                  {new Date(apt.date).getDate()}
                </strong>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '1.1rem', color: '#2d3748' }}>{apt.visitType}</strong>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-full)', backgroundColor: '#dcfce7', color: '#166534' }}>
                    Confirmed
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', margin: '0.25rem 0', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Building2 size={14} /> {apt.hospital}
                </p>
                <p style={{ fontSize: '0.8rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={12} /> {apt.hospitalLocation}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12} /> {apt.time}</span>
                </p>
              </div>
              <CheckCircle2 size={24} color="#16a34a" style={{ flexShrink: 0 }} />
            </div>
          ))}
        </div>
      ) : (
        <div className="card glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <CalendarPlus size={56} color="var(--border-color)" />
          <h3 style={{ marginTop: '1.5rem', color: '#2d3748' }}>No Appointments Yet</h3>
          <p style={{ maxWidth: '400px', margin: '0.5rem auto 1.5rem', fontSize: '1rem' }}>
            Book your first appointment to keep track of your antenatal visits and health checkups.
          </p>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <CalendarPlus size={18} /> Book Your First Appointment
          </button>
        </div>
      )}
    </div>
  );
}
