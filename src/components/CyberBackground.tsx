"use client";

import { useEffect, useState } from 'react';
import styles from './CyberBackground.module.css';

const codeSnippets = [
  "01000011 01011001 01000010 01000101 01010010",
  "0x7F_FIREWALL_ACTIVE :: ACCESS_GRANTED",
  "AES_256_GCM_ENCRYPTED_SESSION",
  "SYN_ACK_HANDSHAKE :: PORT_443",
  "CYBERX_DEFENSE_PROTOCOL_V2.4",
  "ZERO_TRUST_AUTHENTICATION_OK",
  "01101000 01100001 01100011 01101011",
  "PAYLOAD_DECRYPTED_CONTAINER_SAFE",
  "SHA512_SECURE_INTEGRITY_CHECK",
  "01010011 01000101 01000011 01010101",
  "WAF_RULESET_ENGAGED",
  "KERNEL_SANDBOX_STRICT_ISOLATION"
];

const icons = [
  // Shield Icon
  <svg key="shield" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Lock Icon
  <svg key="lock" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
  // Terminal Icon
  <svg key="terminal" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  // Cpu/Chip Icon
  <svg key="chip" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
];

export default function CyberBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [elements, setElements] = useState<Array<{
    id: number;
    type: 'code' | 'icon';
    content: any;
    left: number;
    duration: number;
    delay: number;
    size: number;
  }>>([]);

  useEffect(() => {
    // Generate 20 items (mix of floating text code & cyber icons)
    const items = Array.from({ length: 22 }).map((_, i) => {
      const isIcon = i % 4 === 0;
      return {
        id: i,
        type: isIcon ? ('icon' as const) : ('code' as const),
        content: isIcon ? icons[i % icons.length] : codeSnippets[i % codeSnippets.length],
        left: Math.floor((i / 22) * 94 + Math.random() * 4),
        duration: 12 + Math.random() * 10, // 12s - 22s
        delay: -(Math.random() * 18),
        size: isIcon ? 1 : 0.8 + Math.random() * 0.3
      };
    });
    setElements(items);

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

      {/* Floating Cyber Security Data & Icon Streams */}
      <div className={styles.codeStream}>
        {elements.map((el) => (
          el.type === 'icon' ? (
            <div
              key={el.id}
              className={styles.floatingIcon}
              style={{
                left: `${el.left}%`,
                animationDuration: `${el.duration}s`,
                animationDelay: `${el.delay}s`,
              }}
            >
              {el.content}
            </div>
          ) : (
            <span
              key={el.id}
              className={styles.floatingCode}
              style={{
                left: `${el.left}%`,
                animationDuration: `${el.duration}s`,
                animationDelay: `${el.delay}s`,
                fontSize: `${el.size}rem`
              }}
            >
              {el.content}
            </span>
          )
        ))}
      </div>
    </div>
  );
}
