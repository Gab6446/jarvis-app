import React, { useState } from 'react';
import { Users, MessageCircle, Heart, Plus, Send, Clock, ChevronRight } from 'lucide-react';

const initialThreads = [
  {
    id: 1,
    title: "First Trimester Survival Tips 💪",
    author: "Amina B.",
    avatar: "A",
    replies: 24,
    likes: 18,
    timeAgo: "2h ago",
    preview: "Morning sickness was terrible for me until I discovered ginger tea with honey. Anyone else have remedies that worked?",
    tag: "Tips & Advice"
  },
  {
    id: 2,
    title: "Managing Anxiety During Pregnancy",
    author: "Grace O.",
    avatar: "G",
    replies: 31,
    likes: 45,
    timeAgo: "5h ago",
    preview: "I've been feeling overwhelmed lately. My doctor recommended breathing exercises. What coping strategies are you all using?",
    tag: "Mental Health"
  },
  {
    id: 3,
    title: "Best Hospitals in Lagos for Delivery?",
    author: "Fatima K.",
    avatar: "F",
    replies: 19,
    likes: 12,
    timeAgo: "1d ago",
    preview: "I'm at 32 weeks and need to decide on a hospital for delivery. LUTH vs Evercare vs Island Maternity - thoughts?",
    tag: "Recommendations"
  },
  {
    id: 4,
    title: "Week 24 Nutrition — What I'm Eating 🥑",
    author: "Blessing A.",
    avatar: "B",
    replies: 16,
    likes: 22,
    timeAgo: "1d ago",
    preview: "Sharing my weekly meal prep routine. Iron-rich foods have been a game changer for my energy levels!",
    tag: "Nutrition"
  },
  {
    id: 5,
    title: "Emergency SOS Saved My Life — My Story",
    author: "Chioma E.",
    avatar: "C",
    replies: 42,
    likes: 89,
    timeAgo: "3d ago",
    preview: "I want to share how JARVIS SOS connected me to an ambulance in 8 minutes when I had a hemorrhage scare at 28 weeks...",
    tag: "Stories"
  }
];

const tagColors = {
  "Tips & Advice": { bg: '#dbeafe', color: '#1e40af' },
  "Mental Health": { bg: '#fae8ff', color: '#7e22ce' },
  "Recommendations": { bg: '#dcfce7', color: '#166534' },
  "Nutrition": { bg: '#fef3c7', color: '#92400e' },
  "Stories": { bg: '#fee2e2', color: '#991b1b' }
};

export default function Community() {
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  return (
    <div className="main-content">
      <header className="page-header">
        <div className="flex-between">
          <div>
            <h1 className="page-greeting" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Users color="var(--primary-color)" /> Community Forum
            </h1>
            <p className="page-subtitle">Connect with other mothers, share experiences, and find support.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowNew(!showNew)}>
            <Plus size={18} /> New Discussion
          </button>
        </div>
      </header>

      {/* Community Guidelines */}
      <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-lg)', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Heart size={20} color="#16a34a" />
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#166534' }}>
          <strong>Community Guidelines:</strong> Be kind, supportive, and respectful. Never share personal medical advice — always consult your healthcare provider for clinical decisions.
        </p>
      </div>

      {/* New Post Form */}
      {showNew && (
        <div className="card glass-panel" style={{ marginBottom: '2rem', borderTop: '4px solid var(--primary-color)' }}>
          <h3 style={{ marginBottom: '1.25rem' }}>Start a New Discussion</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Discussion title..."
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem' }}
            />
            <textarea
              placeholder="Share your thoughts, questions, or experiences..."
              rows={4}
              value={newBody}
              onChange={e => setNewBody(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button className="btn btn-outline" onClick={() => setShowNew(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => { setShowNew(false); setNewTitle(''); setNewBody(''); }}>
                <Send size={16} /> Post Discussion
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thread List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {initialThreads.map((thread, idx) => (
          <div
            key={thread.id}
            className="card"
            style={{ display: 'flex', gap: '1.25rem', cursor: 'pointer', opacity: 0, animation: `slideUp 0.4s ease forwards ${idx * 0.05}s` }}
          >
            <div className="avatar" style={{ flexShrink: 0 }}>
              {thread.avatar}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                <strong style={{ fontSize: '1.1rem', color: '#2d3748' }}>{thread.title}</strong>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.5rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: tagColors[thread.tag]?.bg || '#f1f5f9',
                  color: tagColors[thread.tag]?.color || '#475569'
                }}>
                  {thread.tag}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', margin: '0.5rem 0', lineHeight: 1.5 }}>{thread.preview}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>{thread.author}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MessageCircle size={14} /> {thread.replies} replies</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Heart size={14} /> {thread.likes}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> {thread.timeAgo}</span>
              </div>
            </div>
            <ChevronRight size={20} color="var(--text-muted)" style={{ alignSelf: 'center', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
