import React from 'react';
import { 
  Home, 
  AlertTriangle, 
  FileText, 
  MessageSquare, 
  Settings,
  User,
  LogOut
} from 'lucide-react';

export default function Sidebar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'emergency', label: 'Emergency', icon: AlertTriangle, danger: true },
    { id: 'records', label: 'Health Records', icon: FileText },
    { id: 'consult', label: 'Consultation', icon: MessageSquare },
  ];

  return (
    <aside style={{
      width: 'var(--sidebar-width)',
      backgroundColor: 'var(--surface-color)',
      borderRight: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      zIndex: 10
    }} className="hide-on-mobile">
      
      {/* Logo Area */}
      <div style={{
        padding: '1.5rem',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: 'var(--radius-md)',
          background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}>J</div>
        <div>
          <h1 style={{ fontSize: '1.25rem', marginBottom: 0, lineHeight: 1 }}>JARVIS</h1>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Smart Health Provider</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem', paddingLeft: '0.75rem' }}>Menu</p>
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: isActive 
                  ? (item.danger ? 'var(--danger-color)' : 'var(--primary-color)') 
                  : 'transparent',
                color: isActive ? 'white' : 'var(--text-main)',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: isActive ? 600 : 500,
                transition: 'all 0.2s',
                animation: item.danger && isActive ? 'pulse-danger 2s infinite' : 'none',
                boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
              }}
              onMouseEnter={(e) => {
                if(!isActive) e.currentTarget.style.backgroundColor = 'var(--bg-color)';
              }}
              onMouseLeave={(e) => {
                if(!isActive) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Icon size={20} color={isActive ? 'white' : (item.danger && !isActive ? 'var(--danger-color)' : 'var(--text-muted)')} />
              <span style={{ color: item.danger && !isActive ? 'var(--danger-color)' : 'inherit' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="avatar">A</div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <p style={{ margin: 0, fontWeight: 600, fontSize: '0.875rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Aisha Bello</p>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Week 24 Pregnant</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem', fontSize: '0.75rem' }}>
            <Settings size={16} />
          </button>
          <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem', fontSize: '0.75rem', color: 'var(--danger-color)', borderColor: 'var(--danger-light)' }}>
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
