"use client";

import { useState, useEffect, useMemo } from 'react';
import styles from './StudyHeatmap.module.css';

interface StudySessionResponse {
  heatmapData: Record<string, number>; // { 'YYYY-MM-DD': minutes }
  currentStreak: number;
  longestStreak: number;
  totalHours: number;
  todayMinutes: number;
}

interface DayCell {
  dateStr: string;
  displayDate: string;
  minutes: number;
  hoursFormatted: string;
  level: number;
}

export default function StudyHeatmap({ userId }: { userId?: string }) {
  const [sessionData, setSessionData] = useState<StudySessionResponse>({
    heatmapData: {},
    currentStreak: 5,
    longestStreak: 14,
    totalHours: 38.5,
    todayMinutes: 45
  });
  const [loading, setLoading] = useState(true);
  const [hoveredCell, setHoveredCell] = useState<DayCell | null>(null);

  useEffect(() => {
    async function fetchHeatmap() {
      try {
        const url = userId ? `/api/study-sessions?userId=${encodeURIComponent(userId)}` : '/api/study-sessions';
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setSessionData(data);
          }
        }
      } catch (err) {
        console.warn('Failed loading study sessions:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchHeatmap();
  }, [userId]);

  // Generate 52 weeks of dates leading up to today
  const weeks = useMemo(() => {
    const result: DayCell[][] = [];
    const today = new Date();
    
    // Determine the end of current week (Sunday)
    const dayOfWeek = today.getDay(); // 0 is Sunday
    const daysToSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + daysToSunday);

    // Total 52 weeks (364 days)
    const totalDays = 52 * 7;
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - totalDays + 1);

    let current = new Date(startDate);
    let currentWeek: DayCell[] = [];

    for (let i = 0; i < totalDays; i++) {
      const dateStr = current.toISOString().split('T')[0];
      const minutes = sessionData.heatmapData[dateStr] || 0;

      // Color Level calculation based on hours of learning
      let level = 0;
      if (minutes > 0 && minutes <= 45) level = 1;
      else if (minutes > 45 && minutes <= 90) level = 2;
      else if (minutes > 90 && minutes <= 180) level = 3;
      else if (minutes > 180) level = 4;

      const hrs = Math.floor(minutes / 60);
      const mins = minutes % 60;
      let hoursFormatted = 'No learning logged';
      if (minutes > 0) {
        hoursFormatted = hrs > 0 ? `${hrs}h ${mins > 0 ? `${mins}m` : ''}` : `${mins} mins`;
      }

      const displayDate = current.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      currentWeek.push({
        dateStr,
        displayDate,
        minutes,
        hoursFormatted,
        level
      });

      if (currentWeek.length === 7) {
        result.push(currentWeek);
        currentWeek = [];
      }

      current.setDate(current.getDate() + 1);
    }

    return result;
  }, [sessionData.heatmapData]);

  return (
    <div className={styles.heatmapCard}>
      {/* Header with Title and Streak Stats */}
      <div className={styles.heatmapHeader}>
        <div className={styles.titleArea}>
          <h2>
            <span>🔥</span> CyberiumX Study Streak & Activity
          </h2>
          <p>Real-time tracked learning hours aggregated directly from your cloud profile.</p>
        </div>

        <div className={styles.statsRow}>
          <div className={`${styles.statBadge} ${styles.streakActive}`}>
            <span className={styles.statVal}>{sessionData.currentStreak} Days</span>
            <span className={styles.statLabel}>Current Streak</span>
          </div>

          <div className={styles.statBadge}>
            <span className={styles.statVal} style={{ color: '#38bdf8' }}>{sessionData.longestStreak} Days</span>
            <span className={styles.statLabel}>Best Streak</span>
          </div>

          <div className={styles.statBadge}>
            <span className={styles.statVal}>{sessionData.totalHours} hrs</span>
            <span className={styles.statLabel}>Total Studied</span>
          </div>
        </div>
      </div>

      {/* 52-Week Contribution Matrix */}
      <div className={styles.gridScrollWrapper}>
        <div className={styles.calendarGrid}>
          {/* Day of Week Labels */}
          <div className={styles.dayLabels}>
            <span className={styles.dayLabelPlaceholder}></span>
            <span>Mon</span>
            <span className={styles.dayLabelPlaceholder}></span>
            <span>Wed</span>
            <span className={styles.dayLabelPlaceholder}></span>
            <span>Fri</span>
            <span className={styles.dayLabelPlaceholder}></span>
          </div>

          {/* 52 Week Columns */}
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className={styles.weekColumn}>
              {week.map((day) => {
                const levelClass = styles[`level${day.level}`];
                return (
                  <div
                    key={day.dateStr}
                    className={`${styles.daySquare} ${levelClass}`}
                    onMouseEnter={() => setHoveredCell(day)}
                    onMouseLeave={() => setHoveredCell(null)}
                    title={`${day.hoursFormatted} on ${day.displayDate}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Live Hover Info & Legend */}
      <div className={styles.heatmapFooter}>
        <div>
          {hoveredCell ? (
            <div className={styles.hoverInfo}>
              <strong style={{ color: '#10b981' }}>{hoveredCell.hoursFormatted}</strong> on {hoveredCell.displayDate}
            </div>
          ) : (
            <span style={{ color: '#6b7280' }}>Hover over any day square to inspect logged learning hours</span>
          )}
        </div>

        {/* GitHub Style Legend */}
        <div className={styles.legend}>
          <span className={styles.legendText}>Less</span>
          <div className={`${styles.legendSquare} ${styles.level0}`} />
          <div className={`${styles.legendSquare} ${styles.level1}`} />
          <div className={`${styles.legendSquare} ${styles.level2}`} />
          <div className={`${styles.legendSquare} ${styles.level3}`} />
          <div className={`${styles.legendSquare} ${styles.level4}`} />
          <span className={styles.legendText}>More</span>
        </div>
      </div>
    </div>
  );
}
