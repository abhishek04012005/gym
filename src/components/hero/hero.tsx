'use client';
import Image from 'next/image';
import styles from './hero.module.css';
import HeroImage from "../../assets/hero.jpg"

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Transform Your Life Through Fitness
          </h1>
          <p className={styles.subtitle}>
            Welcome to <span className={styles.highlight}>FitLife Elite</span>, where we turn your fitness 
            goals into reality. Experience world-class training, cutting-edge equipment, and a supportive 
            community that pushes you to be your best self.
          </p>
          
          <div className={styles.ctaContainer}>
            <button className={styles.primaryButton}>
              Start Free Trial
            </button>
            <button className={styles.secondaryButton}>
              View Programs
            </button>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>5000+</div>
              <div className={styles.statLabel}>Active Members</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Expert Trainers</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Weekly Classes</div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={`${styles.decorativeShape} ${styles.shape1}`} />
          <div className={`${styles.decorativeShape} ${styles.shape2}`} />
          <Image
            src={HeroImage}
            alt="Fitness Training"
            fill
            className={styles.heroImage}
            priority
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;