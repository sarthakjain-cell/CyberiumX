"use client";

import { useEffect, useRef } from 'react';
import styles from './CyberBackground.module.css';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;

    // Create network nodes - lightweight on mobile
    const nodeCount = isMobile ? 18 : Math.min(45, Math.floor(Math.min(width, height) / 25) + 15);
    const nodes: Node[] = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 1.5 + Math.random() * 1.5,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.015 + Math.random() * 0.015
    }));

    // Data packets
    const packetCount = isMobile ? 4 : 8;
    const packets: DataPacket[] = [];

    const findConnectedNeighbors = (nodeIndex: number) => {
      const neighbors: number[] = [];
      const curr = nodes[nodeIndex];
      nodes.forEach((n, idx) => {
        if (idx !== nodeIndex) {
          const dist = Math.hypot(n.x - curr.x, n.y - curr.y);
          if (dist < 140) neighbors.push(idx);
        }
      });
      return neighbors;
    };

    for (let i = 0; i < packetCount; i++) {
      const from = Math.floor(Math.random() * nodeCount);
      const neighbors = findConnectedNeighbors(from);
      const to = neighbors.length > 0 ? neighbors[Math.floor(Math.random() * neighbors.length)] : (from + 1) % nodeCount;
      packets.push({
        fromNode: from,
        toNode: to,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Direct DOM mutation for GPU-accelerated mouse glow without React re-renders
    let rafMouseMove: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafMouseMove) return;
      rafMouseMove = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }
        rafMouseMove = null;
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const maxDist = isMobile ? 120 : 150;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Nodes & Connections
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulsePhase += node.pulseSpeed;
        const currentPulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const currentRadius = node.radius + currentPulse;
        const opacity = 0.35 + currentPulse * 0.4;

        for (let j = i + 1; j < nodes.length; j++) {
          const target = nodes[j];
          const dist = Math.hypot(target.x - node.x, target.y - node.y);

          if (dist < maxDist) {
            const lineOpacity = (1 - dist / maxDist) * 0.2;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(255, 22, 22, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 22, 22, ${opacity})`;
        ctx.fill();
      });

      // Draw Data Packets
      packets.forEach((pkt) => {
        pkt.progress += pkt.speed;

        const from = nodes[pkt.fromNode];
        const to = nodes[pkt.toNode];

        if (!from || !to) return;

        const px = from.x + (to.x - from.x) * pkt.progress;
        const py = from.y + (to.y - from.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        if (pkt.progress >= 1) {
          pkt.progress = 0;
          pkt.fromNode = pkt.toNode;
          const neighbors = findConnectedNeighbors(pkt.toNode);
          if (neighbors.length > 0) {
            pkt.toNode = neighbors[Math.floor(Math.random() * neighbors.length)];
          } else {
            pkt.toNode = (pkt.toNode + 1) % nodes.length;
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (rafMouseMove) cancelAnimationFrame(rafMouseMove);
    };
  }, []);

  return (
    <div className={styles.bgContainer} aria-hidden="true">
      <div 
        ref={glowRef}
        className={styles.mouseGlow}
        style={{ transform: 'translate3d(-1000px, -1000px, 0)', willChange: 'transform' }}
      />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
