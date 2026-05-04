"use client";

import VideoHero from '@/components/VideoHero';
import ServiceCard from '@/components/ServiceCard';
import { Home, Building2, Store, School, Shield, Zap, Sun } from 'lucide-react'; // Ensure these icons are imported
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div>
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <br />
          <br />
          <h2>Bringing the Bright Side </h2>
          <h2>to Every Project</h2>
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
            title="Solar & EV"
            description="Harness the sun with custom solar panel installations and EV charging stations."
            Icon={Sun}
            href="/solar"
          />
          {/* New Service Cards */}
          <ServiceCard 
            title="Storefronts"
            description="Electrical solutions for retail spaces, ensuring optimal lighting and power for your business."
            Icon={Store}
            href="/storefronts" 
          />
          <ServiceCard 
            title="Schools"
            description="Electrical systems tailored for educational institutions, from classrooms to common areas."
            Icon={School}
            href="/schools"
          />
          <ServiceCard 
            title="Security"
            description="Comprehensive security system installations, including alarms and surveillance cameras."
            Icon={Shield} 
            href="/security"
          />
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2>Why Bright Side?</h2>
          <p>
            Unlike other contractors who focus on the minimum, we focus on the Bright Side. 
            That means transparent pricing, high-end documentation, and a level of professionalism that Walla Walla has been waiting for.
          </p>
          <ul className={styles.features}>
            <li>
              <strong>Itemized Transparency:</strong>
              <span>Know the cost before the work begins.</span>
            </li>
            <li>
              <strong>Visual Verification:</strong>
              <span>We document our work so you can see the quality behind the walls.</span>
            </li>
            <li>
              <strong>Local Reliability:</strong>
              <span>Fully licensed and ready to serve our neighbors.</span>
            </li>
            <li>
              <strong>Emergency Ready:</strong>
              <span>Round-the-clock service for critical repairs.</span>
            </li>
          </ul>
        </div>
        <div className={styles.aboutImage}>
          <img src="/Logo.jpeg" alt="Bright Side Electric Logo" className={styles.logoImage} />
        </div>
      </section>
    </div>
  );
}
