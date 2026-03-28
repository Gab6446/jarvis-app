import React from 'react';
import { 
  Home, 
  AlertTriangle, 
  FileText, 
  MessageSquare, 
  Settings,
  User,
  LogOut,
  BookOpen,
  Bell,
  Users,
  CalendarPlus
} from 'lucide-react';

export default function Sidebar({ currentPage, setCurrentPage, userName, onLogout }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'emergency', label: 'SOS Tracking', icon: AlertTriangle, danger: true },
    { id: 'records', label: 'Health Records', icon: FileText },
    { id: 'appointments', label: 'Appointments', icon: CalendarPlus },
    { id: 'consult', label: 'Talk to Specialist', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'education', label: 'First Aid Guides', icon: BookOpen },
  ];

  return (
    <aside className="sidebar-desktop" style={{
      width: 'var(--sidebar-width)',
      height: '100vh',
      backgroundColor: 'var(--surface-color)',
      borderRight: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1rem',
      flexShrink: 0,
      overflow: 'hidden'
    }}>

      {/* Logo */}
      <div style={{ 
        display: 'flex', alignItems: 'center', gap: '0.75rem', 
        padding: '0 0.75rem', marginBottom: '2.5rem' 
      }}>
        <div style={{ 
          width: '36px', height: '36px', 
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontWeight: 800, fontSize: '1rem'
        }}>
          J
        </div>
        <div>
          <strong style={{ fontSize: '1.125rem', letterSpacing: '-0.03em', color: '#2d3748' }}>JARVIS</strong>
          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)' }}>Emergency Network</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem', overflowY: 'auto' }}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.65rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: currentPage === item.id ? 600 : 400,
              backgroundColor: currentPage === item.id 
                ? (item.danger ? 'rgba(225,29,72,0.08)' : 'var(--bg-color)') 
                : 'transparent',
              color: currentPage === item.id 
                ? (item.danger ? 'var(--danger-color)' : 'var(--primary-dark)')
                : 'var(--text-muted)',
              transition: 'all 0.2s',
              fontFamily: 'inherit'
            }}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* User Profile Footer */}
      <div style={{ 
        borderTop: '1px solid var(--border-color)', 
        paddingTop: '1.25rem', 
        display: 'flex', flexDirection: 'column', gap: '0.75rem' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0 0.5rem' }}>
          <div className="avatar" style={{ width: '2.5rem', height: '2.5rem', fontSize: '1rem' }}>
            {userName ? userName.charAt(0).toUpperCase() : 'U'}
          </div>
          <div style={{ flex: 1 }}>
            <strong style={{ fontSize: '0.85rem', display: 'block', color: '#2d3748' }}>{userName || 'User'}</strong>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Patient</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            className="btn btn-outline" 
            onClick={() => setCurrentPage('settings')}
            style={{ flex: 1, padding: '0.5rem', fontSize: '0.75rem', backgroundColor: currentPage === 'settings' ? 'var(--primary-light)' : 'transparent', color: currentPage === 'settings' ? 'white' : 'inherit' }}
          >
            <Settings size={16} />
          </button>
          <button className="btn btn-outline" onClick={onLogout} style={{ flex: 1, padding: '0.5rem', fontSize: '0.75rem', color: 'var(--danger-color)', borderColor: 'var(--danger-light)' }}>
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
