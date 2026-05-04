import { School, Lightbulb, Zap, ShieldCheck, BookOpen, Network } from 'lucide-react'; // Added relevant icons
import styles from './page.module.css';

export default function SchoolsPage() {
  const services = [
    {
      title: "Classroom Power & Lighting",
      description: "Ensuring optimal power and lighting for dynamic learning environments, including interactive whiteboards and smart classroom technology.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "Campus-Wide Electrical Distribution",
      description: "Robust and reliable electrical distribution systems for entire school campuses and administrative buildings.",
      icon: <Zap size={24} />
    },
    {
      title: "Safety Systems & Emergency Power",
      description: "Installation and maintenance of emergency lighting, fire alarm systems, and backup power to ensure student safety.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "IT & Network Infrastructure",
      description: "Wiring and power solutions for computer labs, server rooms, and school-wide network connectivity.",
      icon: <Network size={24} />
    },
    {
      title: "Auditorium & Event Lighting",
      description: "Professional lighting design and installation for school auditoriums, gymnasiums, and event spaces.",
      icon: <School size={24} /> // Using School icon for Schools page
    },
    {
      title: "Specialized Facility Power",
      description: "Electrical services for science labs, vocational workshops, and other specialized educational facilities.",
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Powering Education</h1>
        <p>Safe and reliable electrical solutions for schools and educational institutions.</p>
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
        <h2>Creating Conducive Learning Environments</h2>
        <p>Let us help you build a safer, more functional school.</p>
        <a href="/contact" className="btn-primary">Request a Quote</a>
      </section>
    </div>
  );
}
