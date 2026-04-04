import Link from 'next/link';
import { Zap } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Zap size={32} className={styles.icon} />
          <span>Bright Side <span className={styles.electric}>Electric</span></span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/residential">Residential</Link>
          <Link href="/commercial">Commercial</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact" className="btn-primary">Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
