import React, { useState } from 'react';
import { Bell, Pill, CalendarCheck, Info, Check, X, Clock } from 'lucide-react';

const initialNotifications = [
  {
    id: 1,
    type: 'medication',
    title: 'Prenatal Vitamin Reminder',
    message: 'Time to take your daily prenatal vitamin (Folic Acid 5mg + Iron). Best taken with breakfast.',
    time: '8:00 AM Today',
    read: false,
    icon: Pill,
    color: '#10b981'
  },
  {
    id: 2,
    type: 'appointment',
    title: 'Upcoming Antenatal Visit',
    message: 'Your routine antenatal checkup with Dr. Olamide at General Hospital, Ikeja is scheduled for April 2nd.',
    time: '2 days from now',
    read: false,
    icon: CalendarCheck,
    color: '#3b82f6'
  },
  {
    id: 3,
    type: 'medication',
    title: 'Iron Supplement Due',
    message: 'Your evening iron supplement (Ferrous Sulphate 200mg) is due. Take with orange juice for better absorption.',
    time: '6:00 PM Today',
    read: false,
    icon: Pill,
    color: '#f59e0b'
  },
  {
    id: 4,
    type: 'system',
    title: 'New Education Module Available',
    message: 'A new guide on "Preparing Your Emergency Go-Bag" has been added to the Education Hub.',
    time: 'Yesterday',
    read: true,
    icon: Info,
    color: '#8b5cf6'
  },
  {
    id: 5,
    type: 'appointment',
    title: 'Tetanus Toxoid Vaccine',
    message: 'Your TT2 vaccination is due next week. Visit General Hospital, Ikeja immunization center.',
    time: '5 days from now',
    read: true,
    icon: CalendarCheck,
    color: '#e11d48'
  },
  {
    id: 6,
    type: 'system',
    title: 'Weekly Health Summary',
    message: 'Your Week 24 health summary is ready. Blood pressure and weight are within normal range. Keep it up!',
    time: '2 days ago',
    read: true,
    icon: Info,
    color: '#14b8a6'
  }
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState('all');

  const unreadCount = notifications.filter(n => !n.read).length;

  function markAsRead(id) {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }

  function dismiss(id) {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }

  function markAllRead() {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }

  const filtered = filter === 'all' ? notifications : notifications.filter(n => n.type === filter);

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'medication', label: 'Medications' },
    { id: 'appointment', label: 'Appointments' },
    { id: 'system', label: 'System' }
  ];

  return (
    <div className="main-content">
      <header className="page-header">
        <div className="flex-between">
          <div>
            <h1 className="page-greeting" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Bell color="var(--primary-color)" /> Notifications
              {unreadCount > 0 && (
                <span style={{ fontSize: '0.875rem', backgroundColor: 'var(--danger-color)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
                  {unreadCount} new
                </span>
              )}
            </h1>
            <p className="page-subtitle">Stay on top of your medications, appointments, and health updates.</p>
          </div>
          {unreadCount > 0 && (
            <button className="btn btn-outline" onClick={markAllRead}>
              <Check size={16} /> Mark All Read
            </button>
          )}
        </div>
      </header>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        {filterButtons.map(f => (
          <button
            key={f.id}
            className="btn"
            onClick={() => setFilter(f.id)}
            style={{
              backgroundColor: filter === f.id ? 'var(--primary-color)' : 'var(--bg-color)',
              color: filter === f.id ? 'white' : 'var(--text-muted)',
              border: filter === f.id ? 'none' : '1px solid var(--border-color)',
              padding: '0.5rem 1rem',
              fontSize: '0.875rem'
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filtered.length === 0 && (
          <div className="card glass-panel" style={{ textAlign: 'center', padding: '3rem' }}>
            <Bell size={48} color="var(--border-color)" />
            <p style={{ marginTop: '1rem', fontSize: '1.125rem' }}>No notifications in this category.</p>
          </div>
        )}
        {filtered.map((n, idx) => (
          <div
            key={n.id}
            className="card"
            style={{
              display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
              borderLeft: n.read ? '4px solid var(--border-color)' : `4px solid ${n.color}`,
              backgroundColor: n.read ? 'var(--surface-color)' : '#fffbf5',
              opacity: 0, animation: `slideUp 0.4s ease forwards ${idx * 0.05}s`
            }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: `${n.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <n.icon size={24} color={n.color} />
            </div>
            <div style={{ flex: 1 }}>
              <div className="flex-between" style={{ marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '1rem', color: '#2d3748' }}>{n.title}</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={12} /> {n.time}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>{n.message}</p>
            </div>
            <div style={{ display: 'flex', gap: '0.25rem', flexShrink: 0 }}>
              {!n.read && (
                <button onClick={() => markAsRead(n.id)} title="Mark as read" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-color)', padding: '0.25rem' }}>
                  <Check size={18} />
                </button>
              )}
              <button onClick={() => dismiss(n.id)} title="Dismiss" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.25rem' }}>
                <X size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
