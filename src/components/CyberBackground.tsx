"use client";

import { useEffect, useRef, useState } from 'react';
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
  progress: number; // 0 to 1
  speed: number;
}

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create network nodes
    const nodeCount = Math.floor(Math.min(width, height) / 25) + 20; // ~40 nodes on standard screen
    const nodes: Node[] = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4, // Slow drift
      vy: (Math.random() - 0.5) * 0.4,
      radius: 2 + Math.random() * 1.5,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02
    }));

    // Create data packets moving between connected nodes
    const packetCount = 12;
    const packets: DataPacket[] = [];

    const findConnectedNeighbors = (nodeIndex: number) => {
      const neighbors: number[] = [];
      const curr = nodes[nodeIndex];
      nodes.forEach((n, idx) => {
        if (idx !== nodeIndex) {
          const dist = Math.hypot(n.x - curr.x, n.y - curr.y);
          if (dist < 160) neighbors.push(idx);
        }
      });
      return neighbors;
    };

    // Initialize packets
    for (let i = 0; i < packetCount; i++) {
      const from = Math.floor(Math.random() * nodeCount);
      const neighbors = findConnectedNeighbors(from);
      const to = neighbors.length > 0 ? neighbors[Math.floor(Math.random() * neighbors.length)] : (from + 1) % nodeCount;
      packets.push({
        fromNode: from,
        toNode: to,
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.006
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.05;
      ctx.clearRect(0, 0, width, height);

      const maxDist = 160;

      // Update & Draw Nodes
      nodes.forEach((node, i) => {
        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce at boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Update pulse phase
        node.pulsePhase += node.pulseSpeed;
        const currentPulse = Math.sin(node.pulsePhase) * 0.5 + 0.5; // 0 to 1
        const currentRadius = node.radius + currentPulse * 1.2;
        const opacity = 0.4 + currentPulse * 0.45;

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const target = nodes[j];
          const dist = Math.hypot(target.x - node.x, target.y - node.y);

          if (dist < maxDist) {
            const lineOpacity = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(255, 22, 22, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw Node Dot with Glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 22, 22, ${opacity})`;
        ctx.shadowColor = '#ff1616';
        ctx.shadowBlur = 10 + currentPulse * 8;
        ctx.fill();
        ctx.restore();
      });

      // Update & Draw Data Packets
      packets.forEach((pkt) => {
        pkt.progress += pkt.speed;

        const from = nodes[pkt.fromNode];
        const to = nodes[pkt.toNode];

        if (!from || !to) return;

        // Calculate packet current position
        const px = from.x + (to.x - from.x) * pkt.progress;
        const py = from.y + (to.y - from.y) * pkt.progress;

        // Draw animated data pulse dot
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ff1616';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.restore();

        // When packet completes path, pick next node hop
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
    };
  }, []);

  return (
    <div className={styles.bgContainer} aria-hidden="true">
      <div 
        className={styles.mouseGlow}
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
