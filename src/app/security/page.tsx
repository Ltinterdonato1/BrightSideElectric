import { Lock, Lightbulb, Zap, ShieldCheck, Camera, Server } from 'lucide-react'; // Added relevant icons
import styles from './page.module.css';

export default function SecurityPage() {
  const services = [
    {
      title: "Surveillance System Wiring",
      description: "Professional installation and wiring for CCTV, IP cameras, and other surveillance equipment to ensure comprehensive monitoring.",
      icon: <Camera size={24} />
    },
    {
      title: "Alarm System Integration",
      description: "Expert installation and integration of alarm systems, access control, and intercoms for complete property security.",
      icon: <Lock size={24} />
    },
    {
      title: "Smart Home Security",
      description: "Setting up smart locks, motion sensors, and smart lighting controls for advanced, connected security solutions.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Emergency Lighting & Backup Power",
      description: "Ensuring critical security systems remain operational during power outages with reliable emergency lighting and backup power.",
      icon: <Zap size={24} />
    },
    {
      title: "Network & Server Room Wiring",
      description: "Secure and efficient wiring for your security network infrastructure, including server rooms and data distribution points.",
      icon: <Server size={24} />
    },
    {
      title: "Commercial Security Solutions",
      description: "Tailored electrical solutions for businesses, including multi-site security systems and advanced access control.",
      icon: <Lock size={24} />
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Your Security, Our Priority</h1>
        <p>Advanced electrical solutions for a safer property.</p>
      </header>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Peace of Mind Starts Here</h2>
        <p>Protect what matters most with our expert security electrical services.</p>
        <a href="/contact" className="btn-primary">Get a Free Estimate</a>
      </section>
    </div>
  );
}
