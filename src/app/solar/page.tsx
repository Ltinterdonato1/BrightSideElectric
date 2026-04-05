import { Zap, Sun, Battery, Car, Wrench, BarChart } from 'lucide-react';
import styles from './page.module.css';

export default function SolarPage() {
  const services = [
    {
      title: "Solar Panel Installation",
      description: "Custom-designed solar arrays for your home or business to maximize energy production.",
      icon: <Sun size={24} />
    },
    {
      title: "Battery Storage (Tesla Powerwall)",
      description: "Backup power solutions to keep your property running during outages and optimize energy usage.",
      icon: <Battery size={24} />
    },
    {
      title: "EV Charging Stations",
      description: "Level 2 and Level 3 charging solutions for electric vehicles, integrated with your solar system.",
      icon: <Car size={24} />
    },
    {
      title: "Energy Monitoring",
      description: "Real-time data on your energy production and consumption through smart monitoring systems.",
      icon: <BarChart size={24} />
    },
    {
      title: "Solar Maintenance",
      description: "Professional cleaning, inspection, and repair services for existing solar installations.",
      icon: <Wrench size={24} />
    },
    {
      title: "Grid-Tie Systems",
      description: "Seamlessly connect your solar system to the grid for net metering and energy credits.",
      icon: <Zap size={24} />
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Solar & EV</h1>
        <p>Save money on soaring energy bills with affordable, reliable solar power for your home or business.</p>
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
        <h2>Ready to go Solar?</h2>
        <p>Contact us for a free energy assessment and solar proposal for your property.</p>
        <a href="/contact" className="btn-primary">Request a Solar Quote</a>
      </section>
    </div>
  );
}
