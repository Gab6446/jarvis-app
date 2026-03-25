import React from 'react';
import { Activity, Thermometer, Droplet, FilePlus, ArrowRight, Printer, Share2 } from 'lucide-react';

export default function Records() {
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
          <button className="btn btn-primary">
            <Share2 size={18} /> Share with Provider
          </button>
        </div>
      </header>

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
              <strong style={{ fontSize: '1.25rem', color: 'var(--danger-color)' }}>O+</strong>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Active Allergies</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-danger">Penicillin</span>
              <span className="badge badge-warning">Latex (Mild)</span>
            </div>
          </div>
        </div>

        {/* Medical History Timeline */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h2 className="card-title" style={{ margin: 0 }}>Clinical History</h2>
            <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>
              <FilePlus size={14} /> Add Record
            </button>
          </div>
          
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: '2px', backgroundColor: 'var(--border-color)' }}></div>
            
            {/* Timeline Items */}
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <div style={{ position: 'absolute', left: '-1.5rem', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', border: '4px solid var(--surface-color)', transform: 'translateX(-4px)' }}></div>
              <div className="flex-between" style={{ marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '1rem' }}>Routine Antenatal Visit</strong>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Yesterday, 10:00 AM</span>
              </div>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Dr. Olamide • General Hospital, Ikeja</p>
              <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                Fetal heart rate normal (140 bpm). Fundal height consistent with gestational age. Prescribed prenatal vitamins refill.
              </div>
            </div>

            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <div style={{ position: 'absolute', left: '-1.5rem', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--border-color)', border: '4px solid var(--surface-color)', transform: 'translateX(-4px)' }}></div>
              <div className="flex-between" style={{ marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '1rem' }}>Ultrasound Scan (Anomaly)</strong>
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
                <strong style={{ fontSize: '1rem' }}>First Trimester Booking</strong>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Jan 20, 2026</span>
              </div>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>General Hospital, Ikeja</p>
              <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                Initial baseline investigations completed. Blood group O+, PCV 35%, Urinalysis normal.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
