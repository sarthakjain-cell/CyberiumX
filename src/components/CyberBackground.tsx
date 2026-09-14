"use client";

import { useEffect, useState } from 'react';
import styles from './CyberBackground.module.css';

const codeSnippets = [
  "01000011 01011001",
  "0x7F_FIREWALL_OK",
  "AES_256_GCM_ENCRYPT",
  "SYN_ACK :: PORT 443",
  "CYBERX_DEFENSE_V2",
  "ZERO_TRUST_AUTHENTICATED",
  "01101000 01100001",
  "PAYLOAD_DECRYPTED",
  "SHA512_SECURE_HASH",
  "01010011 01000101",
  "WAF_RULE_ACTIVE",
  "KERNEL_SANDBOX_STRICT"
];

export default function CyberBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [particles, setParticles] = useState<Array<{
    id: number;
    text: string;
    left: number;
    duration: number;
    delay: number;
    size: number;
  }>>([]);

  useEffect(() => {
    // Generate static particle specs once mounted on client
    const items = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      text: codeSnippets[i % codeSnippets.length],
      left: Math.floor((i / 16) * 94 + (Math.random() * 4)), // Distributed across screen
      duration: 14 + Math.random() * 12, // 14s - 26s
      delay: -(Math.random() * 20), // staggered start
      size: 0.7 + Math.random() * 0.25
    }));
    setParticles(items);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.bgContainer} aria-hidden="true">
      {/* Background Cyber Grid */}
      <div className={styles.cyberGridOverlay}></div>

      {/* Glowing Ambient Orbs */}
      <div className={styles.orbTopLeft}></div>
      <div className={styles.orbBottomRight}></div>

      {/* Radar Scanning Line */}
      <div className={styles.radarScan}></div>

      {/* Interactive Mouse Spotlight Glow */}
      <div 
        className={styles.mouseGlow} 
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Floating Cyber Security Data Streams */}
      <div className={styles.codeStream}>
        {particles.map((p) => (
          <span
            key={p.id}
            className={styles.floatingCode}
            style={{
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              fontSize: `${p.size}rem`
            }}
          >
            {p.text}
          </span>
        ))}
      </div>
    </div>
  );
}
