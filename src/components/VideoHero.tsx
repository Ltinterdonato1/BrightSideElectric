"use client";

import { useEffect, useState } from 'react';
import styles from './VideoHero.module.css';

interface VideoHeroProps {
  // videoUrl prop is no longer directly used for embedding, but kept for interface consistency
  videoUrl: string; 
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const VideoHero = ({ videoUrl, title, subtitle, ctaText, ctaLink }: VideoHeroProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    // No timer needed for static image or gradient background, it should be visible immediately
  }, []);

  // getYouTubeId function is no longer relevant for a static image, but kept for structure
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname === 'youtu.be') return urlObj.pathname.slice(1);
        if (urlObj.hostname.includes('youtube.com')) return urlObj.searchParams.get('v');
        return null;
    } catch (e) {
        // Fallback to regex if URL object fails
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : null;
    }
  };

  // const youtubeId = getYouTubeId(videoUrl); // Not used for image or gradient

  return (
    <section className={styles.hero}>
      {/* Background is now handled by CSS gradient on .hero */}
      {/* Image/video specific divs are removed or adapted */}
      
      <div className={styles.overlay} /> {/* Overlay remains for text readability */}
      
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.cta}>
          <a href={ctaLink} className="btn-primary">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
