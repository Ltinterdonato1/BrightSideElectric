import { ShoppingBasket, Lightbulb, Zap, ShieldCheck, Tool, Building } from 'lucide-react'; // Added relevant icons
import styles from './page.module.css';

export default function StorefrontPage() {
  const services = [
    {
      title: "Retail Lighting Design",
      description: "Create an inviting atmosphere with expert lighting tailored for retail spaces to highlight products.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "Point-of-Sale (POS) Systems",
      description: "Reliable power and wiring for all your checkout counters, terminals, and electronic payment systems.",
      icon: <Zap size={24} />
    },
    {
      title: "Display & Showcase Lighting",
      description: "Enhance product appeal with specialized lighting for window displays and in-store exhibits.",
      icon: <ShoppingBasket size={24} /> // Using ShoppingBasket for Storefront
    },
    {
      title: "Security & Surveillance Wiring",
      description: "Professional installation of wiring for CCTV, alarm systems, and access control for enhanced security.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Signage & Exterior Lighting",
      description: "Illuminate your storefront with attractive exterior lighting and visible signage power solutions.",
      icon: <Building size={24} />
    },
    {
      title: "Emergency Power & Backup",
      description: "Ensure business continuity with backup power solutions for critical operations.",
      icon: <Zap size={24} />
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Illuminate Your Business</h1>
        <p>Expert electrical solutions designed for retail storefronts.</p>
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
        <h2>Attract More Customers with the Right Ambiance</h2>
        <p>Let us power your success with tailored electrical services.</p>
        <a href="/contact" className="btn-primary">Request a Consultation</a>
      </section>
    </div>
  );
}
