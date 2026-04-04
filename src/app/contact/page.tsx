import styles from './page.module.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Get a Free Estimate</h1>
        <p>Whether it's a quick home repair or a massive commercial project, we're ready to light it up.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <Phone className={styles.icon} />
            <div>
              <h3>Call Us</h3>
              <p>(509) 555-0123</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <Mail className={styles.icon} />
            <div>
              <h3>Email Us</h3>
              <p>hello@brightsideelectric.com</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <MapPin className={styles.icon} />
            <div>
              <h3>Location</h3>
              <p>Walla Walla, WA</p>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Service Type</label>
            <select>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Storefront</option>
              <option>School/Industrial</option>
              <option>Solar/EV</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea placeholder="Tell us about your project..." rows={6}></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Send Message <Send size={18} style={{marginLeft: '8px'}} />
          </button>
        </form>
      </div>
    </div>
  );
}
