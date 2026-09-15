"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';

const slides = [
  {
    id: 0,
    title: "Welcome to CyberiumX!",
    content: "At CyberiumX, we are impassioned about Cyber Security and devoted to providing valuable information and resources to help individuals and organizations stay safe in the digital world."
  },
  {
    id: 1,
    title: "Our Goal.",
    content: "Our goal is to demystify Cyber Security and empower our readers with the knowledge they need to protect themselves against evolving threats. CyberiumX is a trusted leader in Cyber Security training."
  },
  {
    id: 2,
    title: "Our Mission.",
    content: "Our mission is to equip Cyber Security professionals with practical skills and in-depth knowledge to help create a safer digital world. We provide top-quality training, certifications, degree programs, and cyber ranges."
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
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
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
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
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
