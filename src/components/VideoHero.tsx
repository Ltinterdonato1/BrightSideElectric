"use client";

import { useEffect, useState } from 'react';
import styles from './VideoHero.module.css';

interface VideoHeroProps {
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
  }, []);

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

  const youtubeId = getYouTubeId(videoUrl);

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        {mounted && youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&enablejsapi=1&start=0&end=20`}
            allow="autoplay; encrypted-media; picture-in-picture"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              minWidth: '177.77vh',
              minHeight: '56.25vw',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              border: 'none',
              zIndex: 0
            }}
            title="Background Video"
          />
        ) : mounted && videoUrl && !youtubeId ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0
            }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#0a0f1e', zIndex: 0 }} />
        )}
        <div className={styles.overlay} />
      </div>
      
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
