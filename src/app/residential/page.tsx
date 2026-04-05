import { Home, Lightbulb, Zap, ShieldCheck, Drill, Hammer } from 'lucide-react';
import styles from './page.module.css';

export default function ResidentialPage() {
  const services = [
    {
      title: "Service Panel Upgrades",
      description: "Upgrade your home's electrical capacity with modern, safe service panels and circuit breakers.",
      icon: <Zap size={24} />
    },
    {
      title: "Full Home Rewiring",
      description: "Safe and efficient replacement of outdated or faulty wiring to meet modern electrical codes.",
      icon: <Drill size={24} />
    },
    {
      title: "Lighting Design & Install",
      description: "Custom interior and exterior lighting solutions, including recessed, accent, and smart lighting.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "Smart Home Integration",
      description: "Modernize your home with connected switches, thermostats, and automated electrical systems.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Remodels & Additions",
      description: "Complete electrical planning and installation for kitchens, bathrooms, and home extensions.",
      icon: <Hammer size={24} />
    },
    {
      title: "EV Charging Stations",
      description: "Professional installation of Level 2 electric vehicle chargers for your home garage.",
      icon: <Zap size={24} />
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Your Home, Powered Smarter </h1>
        <p>Reliable, modern, and safe electrical solutions for your home.</p>
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
        <h2>Ready to Bring your project to life?</h2>
        <p>From small repairs to complete home wiring, we've got you covered.</p>
        <a href="/contact" className="btn-primary">Request an Estimate</a>
      </section>
    </div>
  );
}
