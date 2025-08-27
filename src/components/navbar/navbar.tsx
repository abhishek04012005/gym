'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <span className={styles.logoText}>FitLife Elite</span>
        </div>

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/classes" className={styles.navLink}>
            Classes
          </Link>
          <Link href="/trainers" className={styles.navLink}>
            Trainers
          </Link>
          <Link href="/schedule" className={styles.navLink}>
            Schedule
          </Link>
          <Link href="/pricing" className={styles.navLink}>
            Pricing
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          <button className={styles.ctaButton}>
            Start Free Trial
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;