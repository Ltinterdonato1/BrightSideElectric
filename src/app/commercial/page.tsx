import { Building2, Factory, Shield, Zap, Briefcase, Ruler } from 'lucide-react';
import styles from './page.module.css';

export default function CommercialPage() {
  const services = [
    {
      title: "Commercial Installations",
      description: "Full-scale electrical infrastructure for new commercial builds, including offices and retail spaces.",
      icon: <Building2 size={24} />
    },
    {
      title: "Industrial & Manufacturing",
      description: "Heavy-duty power solutions for factories, warehouses, and industrial equipment.",
      icon: <Factory size={24} />
    },
    {
      title: "Maintenance Contracts",
      description: "Ongoing electrical maintenance and support to keep your business running smoothly 24/7.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Energy Efficiency Audits",
      description: "Comprehensive audits and upgrades to reduce your business's energy consumption and costs.",
      icon: <Zap size={24} />
    },
    {
      title: "Safety & Compliance",
      description: "Ensuring your commercial property meets all local electrical codes and safety regulations.",
      icon: <Shield size={24} />
    },
    {
      title: "Blueprint Design",
      description: "Expert electrical planning and blueprint design for complex commercial projects.",
      icon: <Ruler size={24} />
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>The Commercial Standard</h1>
        <p>Providing high-capacity, reliable electrical systems for Walla Walla's business community.</p>
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
        <h2>Power your business with Bright Side</h2>
        <p>Contact us for a professional consultation and estimate for your commercial project.</p>
        <a href="/contact" className="btn-primary">Get a Commercial Quote</a>
      </section>
    </div>
  );
}
