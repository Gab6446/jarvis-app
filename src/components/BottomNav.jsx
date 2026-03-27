import React from 'react';
import { Home, AlertTriangle, FileText, Users, MoreHorizontal, Bell, CalendarPlus, MessageSquare, BookOpen, Settings } from 'lucide-react';

export default function BottomNav({ currentPage, setCurrentPage }) {
  const mainItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'emergency', label: 'SOS', icon: AlertTriangle, danger: true },
    { id: 'records', label: 'Records', icon: FileText },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'notifications', label: 'Alerts', icon: Bell },
  ];

  return (
    <nav className="bottom-nav">
      {mainItems.map(item => (
        <button
          key={item.id}
          onClick={() => setCurrentPage(item.id)}
          className={`bottom-nav-item ${currentPage === item.id ? 'active' : ''} ${item.danger ? 'danger' : ''}`}
        >
          <item.icon size={20} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
