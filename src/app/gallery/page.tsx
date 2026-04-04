import styles from './page.module.css';

const GalleryItem = ({ videoUrl, title, type }: { videoUrl: string, title: string, type: string }) => (
  <div className={styles.galleryItem}>
    <video autoPlay muted loop playsInline className={styles.video}>
      <source src={videoUrl} type="video/mp4" />
    </video>
    <div className={styles.itemInfo}>
      <span className={styles.type}>{type}</span>
      <h3 className={styles.itemTitle}>{title}</h3>
    </div>
  </div>
);

export default function GalleryPage() {
  const items = [
    {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-working-on-an-electrical-panel-41662-large.mp4",
      title: "Main Panel Installation",
      type: "Commercial"
    },
    {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hand-turning-on-a-light-switch-41661-large.mp4",
      title: "Smart Home Lighting",
      type: "Residential"
    },
    {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-city-lights-at-night-background-41655-large.mp4",
      title: "Storefront Exterior",
      type: "Commercial"
    },
    {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-of-a-house-at-night-41659-large.mp4",
      title: "New Construction Prep",
      type: "Drone Shot"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>The Work Speaks for Itself</h1>
        <p>Real projects, real results. We use drone technology to ensure every connection is perfect and every installation is documented.</p>
      </div>

      <div className={styles.galleryGrid}>
        {items.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
