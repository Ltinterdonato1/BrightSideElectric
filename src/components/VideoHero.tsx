import styles from './VideoHero.module.css';

interface VideoHeroProps {
  videoUrl: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const VideoHero = ({ videoUrl, title, subtitle, ctaText, ctaLink }: VideoHeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
          poster="/video-poster.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <h1 className={`${styles.title} animate-fade-in`}>{title}</h1>
        <p className={`${styles.subtitle} animate-fade-in`}>{subtitle}</p>
        <div className={`${styles.cta} animate-fade-in`}>
          <a href={ctaLink} className="btn-primary">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
