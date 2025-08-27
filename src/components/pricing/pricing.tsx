'use client';
import { useState } from 'react';
import styles from './pricing.module.css';

interface PricingPlan {
  id: number;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  buttonStyle: 'primary' | 'secondary';
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Basic Plan',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      'Access to gym equipment',
      '2 group classes per week',
      'Basic fitness assessment',
      'Locker room access',
      'Mobile app access',
      'Monthly fitness report'
    ],
    buttonStyle: 'secondary'
  },
  {
    id: 2,
    name: 'Pro Fitness',
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [
      'Unlimited gym access',
      'Unlimited group classes',
      'Advanced fitness assessment',
      'Personal trainer consultation',
      'Nutrition planning',
      'Premium app features',
      'Weekly progress tracking',
      'Access to specialty classes'
    ],
    isPopular: true,
    buttonStyle: 'primary'
  },
  {
    id: 3,
    name: 'Elite Performance',
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      'All Pro Fitness features',
      'Personal training sessions',
      'Custom workout plans',
      'Diet consultation',
      'Recovery sessions',
      'Performance analytics',
      'Private locker',
      'Priority booking',
      'Guest passes'
    ],
    buttonStyle: 'secondary'
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className={styles.pricingSection}>
      <div className={`${styles.decorativeShape} ${styles.shape1}`} />
      <div className={`${styles.decorativeShape} ${styles.shape2}`} />
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Membership Plans</h2>
          <p className={styles.subtitle}>
            Choose the perfect plan for your fitness journey. Get access to world-class
            facilities and expert guidance at competitive prices.
          </p>
        </div>

        <div className={styles.switchContainer}>
          <span className={`${styles.switchLabel} ${!isYearly ? styles.switchActive : ''}`}>
            Monthly
          </span>
          <div 
            className={`${styles.switch} ${isYearly ? styles.switchActive : ''}`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <div className={styles.switchKnob} />
          </div>
          <span className={`${styles.switchLabel} ${isYearly ? styles.switchActive : ''}`}>
            Yearly <span className={styles.guaranteeHighlight}>(Save 20%)</span>
          </span>
        </div>

        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={styles.pricingCard}>
              {plan.isPopular && (
                <div className={styles.popularBadge}>Popular</div>
              )}
              
              <h3 className={styles.planName}>{plan.name}</h3>
              
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className={styles.period}>/{isYearly ? 'year' : 'month'}</span>
              </div>

              <div className={styles.features}>
                {plan.features.map((feature, index) => (
                  <div key={index} className={styles.feature}>
                    <svg
                      className={styles.featureIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <button 
                className={`${styles.ctaButton} ${
                  plan.buttonStyle === 'primary' ? styles.primaryButton : styles.secondaryButton
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className={styles.guarantee}>
          <p className={styles.guaranteeText}>
            Try any plan risk-free with our{' '}
            <span className={styles.guaranteeHighlight}>30-day money-back guarantee</span>.
            No commitment required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;