"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';

const slides = [
  {
    id: 0,
    title: "Our Mission.",
    content: "Equipping professionals with practical skills to create a safer digital world. We demystify security and empower individuals against evolving threats."
  },
  {
    id: 1,
    title: "What We Offer.",
    content: "Top-quality, job-oriented training and certifications. From Cloud Security to Bug Bounties, our curriculum is designed by industry experts for complete real-world exposure."
  },
  {
    id: 2,
    title: "Why Choose Us.",
    content: "We move beyond theory. Our programs are 100% practical, focusing on real-world simulations to give you hands-on experience defending against actual cyber threats."
  }
];

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const currentOffset = clientX - startX;
    setDragOffset(currentOffset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (dragOffset < -50 && currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else if (dragOffset > 50 && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
    setDragOffset(0);
  };

  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.aboutGrid}`}>
        
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/about_us.png" 
            alt="About CyberiumX" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            draggable="false"
          />
          <div className={styles.imageOverlay}></div>
        </motion.div>
        
        <motion.div 
          className={styles.contentWrapper}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.label}>&gt; SYSTEM_LOG: ABOUT_US</span>
          
          <div 
            className={styles.sliderViewport}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            <div 
              className={styles.slideTrack} 
              style={{ 
                transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className={styles.slide}>
                  <h2 draggable="false">{slide.title}</h2>
                  <p draggable="false">{slide.content}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.sliderControls}>
            {slides.map((_, index) => (
              <button 
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
