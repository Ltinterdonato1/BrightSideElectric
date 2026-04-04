import styles from './Footer.module.css';
import { Zap, Globe, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Zap size={24} className={styles.icon} />
            <span>Bright Side <span className={styles.electric}>Electric</span></span>
          </Link>
          <p className={styles.tagline}>Walla Walla's Premier Electrical Contractor. Modern Solutions, Transparent Pricing.</p>
          <div className={styles.socials}>
            <Globe size={20} />
            <Mail size={20} />
            <Phone size={20} />
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Services</h4>
            <Link href="/residential">Residential</Link>
            <Link href="/commercial">Commercial</Link>
            <Link href="/commercial">Storefronts</Link>
            <Link href="/commercial">Schools</Link>
          </div>
          <div className={styles.column}>
            <h4>Company</h4>
            <Link href="/gallery">Our Work</Link>
            <Link href="/contact">Get a Quote</Link>
            <a href="#">Safety Tips</a>
            <a href="#">Privacy Policy</a>
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
