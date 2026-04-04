import VideoHero from '@/components/VideoHero';
import ServiceCard from '@/components/ServiceCard';
import { Home, Building2, Store, School, Shield, Zap } from 'lucide-react';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <VideoHero 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-working-on-an-electrical-panel-41662-large.mp4"
        title="Walla Walla's Next Generation of Power"
        subtitle="Residential • Commercial • Industrial"
        ctaText="Get a Free Estimate"
        ctaLink="/contact"
      />

      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>Expert Solutions</h2>
          <p>From residential repairs to large-scale commercial installations, we bring the bright side to every project.</p>
        </div>

        <div className={styles.grid}>
          <ServiceCard 
            title="Residential"
            description="Complete home wiring, panel upgrades, smart home integration, and 24/7 emergency repairs."
            Icon={Home}
            href="/residential"
          />
          <ServiceCard 
            title="Commercial"
            description="Large-scale electrical systems for offices, warehouses, and industrial facilities."
            Icon={Building2}
            href="/commercial"
          />
          <ServiceCard 
            title="Storefronts"
            description="Custom lighting design and power solutions to make your business stand out."
            Icon={Store}
            href="/commercial"
          />
          <ServiceCard 
            title="Schools"
            description="Reliable electrical infrastructure and maintenance for educational institutions."
            Icon={School}
            href="/commercial"
          />
          <ServiceCard 
            title="Security"
            description="Advanced surveillance, alarm systems, and access control for peace of mind."
            Icon={Shield}
            href="/commercial"
          />
          <ServiceCard 
            title="Solar & EV"
            description="Future-proof your property with solar panels and electric vehicle charging stations."
            Icon={Zap}
            href="/residential"
          />
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2>Why Bright Side?</h2>
          <p>
            Unlike other contractors who focus on the minimum, we focus on the **Bright Side**. 
            That means transparent pricing, high-end visual documentation of our work via drone shots, 
            and a level of professionalism that Walla Walla has been waiting for.
          </p>
          <ul className={styles.features}>
            <li>Drone-Inspected Work Quality</li>
            <li>Licensed, Bonded, and Insured</li>
            <li>24/7 Emergency Support</li>
            <li>Energy Efficiency Specialists</li>
          </ul>
        </div>
        <div className={styles.aboutVideo}>
          <video autoPlay muted loop playsInline className={styles.miniVideo}>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hand-turning-on-a-light-switch-41661-large.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
