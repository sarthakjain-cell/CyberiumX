"use client";

import { useState, useEffect } from 'react';
import styles from './Admin.module.css';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'reviews'>('upload');
  const [reviews, setReviews] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Course Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Cybersecurity');
  const [level, setLevel] = useState('Intermediate');
  const [duration, setDuration] = useState('4 Weeks');
  const [price, setPrice] = useState('₹4,999');
  const [imageUrl, setImageUrl] = useState('');
  const [modules, setModules] = useState<string[]>(['Module 1: Fundamentals', 'Module 2: Advanced Labs']);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/data');
      const data = await res.json();
      if (data.reviews) {
        setReviews(data.reviews);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddModule = () => {
    setModules([...modules, `Module ${modules.length + 1}: `]);
  };

  const handleModuleChange = (index: number, value: string) => {
    const updated = [...modules];
    updated[index] = value;
    setModules(updated);
  };

  const handleRemoveModule = (index: number) => {
    setModules(modules.filter((_, i) => i !== index));
  };

  const handleCourseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      const res = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'ADD_COURSE',
          title,
          description,
          category,
          level,
          duration,
          price,
          imageUrl,
          modules: modules.filter(m => m.trim() !== '')
        })
      });

      const data = await res.json();
      if (data.success) {
        setMessage('Course published successfully!');
        setTitle('');
        setDescription('');
        setImageUrl('');
        setModules(['Module 1: Fundamentals']);
      } else {
        setMessage('Failed to publish course.');
      }
    } catch (e) {
      setMessage('Error publishing course.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResolveReview = async (reviewId: number) => {
    try {
      await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'RESOLVE_REVIEW',
          reviewId
        })
      });
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>CyberiumX Command Center</h1>
          <p style={{ color: '#9ca3af', margin: '0.25rem 0 0' }}>Internal Team Management & Control Portal</p>
        </div>
        <span className={styles.badge}>Admin Authorized</span>
      </header>

      <div className={styles.tabRow}>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'upload' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          Publish New Course
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'reviews' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Student Feedback & Issues ({reviews.filter(r => r.status === 'PENDING').length})
        </button>
      </div>

      {activeTab === 'upload' ? (
        <div className={styles.card}>
          <h2 style={{ fontSize: '1.4rem', margin: '0 0 1.5rem', color: '#fff' }}>Course Uploader & Curriculum Builder</h2>
          
          {message && (
            <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', borderRadius: '8px', marginBottom: '1.5rem' }}>
              {message}
            </div>
          )}

          <form onSubmit={handleCourseSubmit}>
            <div className={styles.formGrid}>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Course Title *</label>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="e.g. Advanced AI Vulnerability Exploitation" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Category</label>
                <select className={styles.select} value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Ethical Hacking">Ethical Hacking</option>
                  <option value="Cloud Security">Cloud Security</option>
                  <option value="Bug Bounty">Bug Bounty</option>
                  <option value="AI Security">AI Security</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Difficulty Level</label>
                <select className={styles.select} value={level} onChange={(e) => setLevel(e.target.value)}>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced / Elite">Advanced / Elite</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Duration</label>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="e.g. 6 Weeks (Hands-on)" 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Course Price</label>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="e.g. ₹6,999" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Thumbnail Image / Icon URL</label>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="e.g. https://images.unsplash.com/... or /logo.png" 
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Course Overview & Description *</label>
                <textarea 
                  className={styles.textarea} 
                  placeholder="Provide a comprehensive summary of what candidates will learn..." 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Curriculum Sub-Parts (Modules)</label>
                <div className={styles.moduleSection}>
                  {modules.map((mod, idx) => (
                    <div key={idx} className={styles.moduleRow}>
                      <input 
                        type="text" 
                        className={styles.input} 
                        value={mod} 
                        onChange={(e) => handleModuleChange(idx, e.target.value)}
                        placeholder={`Sub-part ${idx + 1}`}
                      />
                      {modules.length > 1 && (
                        <button 
                          type="button" 
                          onClick={() => handleRemoveModule(idx)}
                          style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.5rem' }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" className={styles.addBtn} onClick={handleAddModule}>
                    + Add Sub-part / Module
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Publishing Course...' : 'Publish Course to Website'}
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.card}>
          <h2 style={{ fontSize: '1.4rem', margin: '0 0 1.5rem', color: '#fff' }}>Student Feedback & Issue Resolution</h2>
          
          {reviews.length === 0 ? (
            <p style={{ color: '#9ca3af' }}>No student feedback or reported issues yet.</p>
          ) : (
            <div className={styles.reviewList}>
              {reviews.map((rev) => (
                <div key={rev.id} className={`${styles.reviewCard} ${rev.status === 'RESOLVED' ? styles.resolvedCard : ''}`}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 700, color: '#fff' }}>{rev.userName}</span>
                      <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>• {rev.createdAt}</span>
                      <span style={{ color: '#ef4444', fontWeight: 600, fontSize: '0.85rem' }}>({rev.courseTitle})</span>
                    </div>
                    <p style={{ margin: '0 0 0.5rem', color: '#d1d5db', fontSize: '0.95rem' }}>"{rev.comment}"</p>
                    <span style={{ fontSize: '0.8rem', color: rev.status === 'RESOLVED' ? '#10b981' : '#f59e0b', fontWeight: 600 }}>
                      Status: {rev.status}
                    </span>
                  </div>

                  {rev.status === 'PENDING' && (
                    <button 
                      className={styles.resolveBtn}
                      onClick={() => handleResolveReview(rev.id)}
                    >
                      Mark Resolved
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
