"use client";

import React from 'react';
import styles from './footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.topSection}>
        <div className={`${styles.decorativeShape} ${styles.shape1}`}></div>
        <div className={`${styles.decorativeShape} ${styles.shape2}`}></div>
        <div className={styles.container}>
          <div className={styles.newsletterSection}>
            <h2 className={styles.title}>Subscribe to Our Newsletter</h2>
            <p className={styles.subtitle}>
              Stay up to date with our latest fitness tips, class schedules, and special offers.
            </p>
            <form onSubmit={handleSubscribe} className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            {/* Company Info */}
            <div className={styles.footerInfo}>
              <h2 className={styles.logo}>GYM Website</h2>
              <p className={styles.description}>
                Transform your life through fitness. Join our community and experience
                world-class training, expert guidance, and state-of-the-art facilities.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <FaFacebookF />
                </a>
                <a href="#" className={styles.socialLink}>
                  <FaTwitter />
                </a>
                <a href="#" className={styles.socialLink}>
                  <FaInstagram />
                </a>
                <a href="#" className={styles.socialLink}>
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <a href="#" className={styles.footerLink}>Home</a>
              <a href="#" className={styles.footerLink}>About Us</a>
              <a href="#" className={styles.footerLink}>Classes</a>
              <a href="#" className={styles.footerLink}>Trainers</a>
              <a href="#" className={styles.footerLink}>Schedule</a>
              <a href="#" className={styles.footerLink}>Pricing</a>
            </div>

            {/* Services */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Services</h3>
              <a href="#" className={styles.footerLink}>Personal Training</a>
              <a href="#" className={styles.footerLink}>Group Classes</a>
              <a href="#" className={styles.footerLink}>Nutrition Plans</a>
              <a href="#" className={styles.footerLink}>CrossFit</a>
              <a href="#" className={styles.footerLink}>Yoga Classes</a>
            </div>

            {/* Contact Info */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Contact Us</h3>
              <div className={styles.contactInfo}>
                <MdLocationOn className={styles.contactIcon} />
                <span>123 Fitness Street, Gym City, GC 12345</span>
              </div>
              <div className={styles.contactInfo}>
                <MdPhone className={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactInfo}>
                <MdEmail className={styles.contactIcon} />
                <span>jayajayswa49@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} GYM Website. All rights reserved. 
              Designed by <a href="#">Jaya Jayswal</a>
            </div>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>Privacy Policy</a>
              <a href="#" className={styles.bottomLink}>Terms of Service</a>
              <a href="#" className={styles.bottomLink}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
