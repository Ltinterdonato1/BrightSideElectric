import styles from './Footer.module.css';
import { Zap, Mail, Phone, MapPin, Home, ShoppingBasket, School, Lock, Building, SolarPanel } from 'lucide-react'; // Added necessary icons
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <Link href="/" className={styles.logo}>
            <Zap size={32} className={styles.icon} />
            <span>Bright Side <span className={styles.electric}>Electric</span></span>
          </Link>
          <p className={styles.titleTagline}>High-Performance Electrical. No Guesswork.</p>
        </div>

        <div className={styles.linksGrid} style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Column 1: All Services */}
          <div className={styles.column}>
            <h4>Services</h4>
            <Link href="/residential">Residential</Link>
            <Link href="/commercial">Commercial</Link>
            <Link href="/solar">Solar & EV</Link>
            <Link href="/storefront">Storefront</Link>
            <Link href="/schools">Schools</Link>
            <Link href="/security">Security</Link>
          </div>
          
          {/* Column 2: Contact & Licenses */}
          <div className={styles.column}>
            <h4>Contact & Licenses</h4>
            <div className={styles.contactItem}>
              <Phone size={18} className={styles.contactIcon} />
              <a href="tel:2066668062">(206) 666-8062</a>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} className={styles.contactIcon} />
              <a href="mailto:getbrightsideelectric@gmail.dcom">getbrightsideelectric@gmail.com</a>
            </div>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/profile.php?id=61575486223206" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
            <span className={styles.licenseItem}>WA: #BRIGHSE881KL</span>
            <span className={styles.licenseItem}>OR: #1234567-EL</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Bright Side Electric, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
