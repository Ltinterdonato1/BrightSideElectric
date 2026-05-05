"use client";

import Link from 'next/link';
import { Zap, Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  text: string;
  isPrimary?: boolean; // Optional property
}

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  const headerRef = useRef<HTMLDivElement>(null); // Ref for the header

  // Function to check if the current view is mobile
  const checkIsMobile = () => {
    if (headerRef.current) {
      const menuButtonElement = headerRef.current.querySelector(`.${styles.menuButton}`);
      if (menuButtonElement) {
        const computedStyle = window.getComputedStyle(menuButtonElement);
        setIsMobile(computedStyle.display !== 'none');
      } else {
        setIsMobile(window.innerWidth < 768);
      }
    } else {
      setIsMobile(window.innerWidth < 768);
    }
  };

  useEffect(() => {
    // Initial check on mount
    checkIsMobile();
    // Add event listener for window resize to re-check mobile status
    window.addEventListener('resize', checkIsMobile);
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const handleRouteChange = () => {
      setIsModalOpen(false);
    };
  }, [isModalOpen]);

  // Determine the links to display in the modal
  const getModalLinks = (isMobileView: boolean): NavLink[] => {
    const allLinks: NavLink[] = [
      { href: '/residential', text: 'Residential' },
      { href: '/commercial', text: 'Commercial' },
      { href: '/solar', text: 'Solar' },
      { href: '/storefront', text: 'Storefront' },
      { href: '/schools', text: 'Schools' },
      { href: '/security', text: 'Security' },
    ];

    const secondaryLinks: NavLink[] = [
      { href: '/storefront', text: 'Storefront' },
      { href: '/schools', text: 'Schools' },
      { href: '/security', text: 'Security' },
    ];

    const contactLink: NavLink = { href: '/contact', text: 'Get a Quote', isPrimary: true };

    if (isMobileView) {
      // For mobile, show all services and contact link. Replace current service with 'Home'.
      const linksToShow = allLinks.filter(link => link.href !== pathname);
      
      // Determine if 'Home' link should be added
      let homeLinkAdded = false;
      if (pathname !== '/' && pathname !== '/contact' && !allLinks.some(link => link.href === pathname)) {
          // If not on home, contact, or a service page, no 'Home' needed.
          // If on a service page, 'Home' is needed.
      } else if (pathname !== '/' && pathname !== '/contact') {
          homeLinkAdded = true;
      }

      const finalLinks = homeLinkAdded ? [{ href: '/', text: 'Home' }, ...linksToShow] : [...linksToShow];
      
      return [...finalLinks, contactLink];

    } else {
      // For desktop/tablet, show only secondary services and contact link in modal
      return [...secondaryLinks, contactLink];
    }
  };

  const modalLinks: NavLink[] = getModalLinks(isMobile);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Zap size={32} className={styles.icon} />
          <span>Bright Side <span className={styles.electric}>Electric</span></span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/residential">Residential</Link>
          <Link href="/commercial">Commercial</Link>
          <Link href="/solar">Solar</Link>
          <Link href="/contact" className="btn-primary">Get a Quote</Link>
        </nav>

        <button className={`${styles.menuButton} ${isModalOpen ? styles.hiddenWhenModalOpen : ''}`} onClick={toggleModal}>
          {isModalOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.modalCloseButton} onClick={toggleModal}>
              <X size={24} />
            </button>
            <nav className={styles.modalNav}>
              {modalLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className={link.isPrimary ? "btn-primary" : ""} 
                  onClick={toggleModal}
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
