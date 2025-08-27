'use client';
import Image, { StaticImageData } from 'next/image';
import styles from './classes.module.css';
import HighIntensityImage from "../../assets/classes/highintense.jpg"
import YogaFollowImage from "../../assets/classes/yogafollow.jpg"
import StrengthImgae from "../../assets/classes/strength.jpg"
import SpinningImgae from "../../assets/classes/spinning.jpg"
import CoreImage from "../../assets/classes/core.jpg"
import CrossFitImage from "../../assets/classes/CrossFit.jpg"

interface GymClass {
  id: number;
  type: string;
  description: string;
  image: string | StaticImageData;
  schedule: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  trainer: string;
}

const classesData: GymClass[] = [
  {
    id: 1,
    type: 'High-Intensity Training',
    description: 'Push your limits with our intense cardio and strength training sessions designed to maximize calorie burn and improve overall fitness.',
    image: HighIntensityImage,
    schedule: 'Mon, Wed, Fri',
    duration: '45 mins',
    level: 'advanced',
    trainer: 'Alex Thompson'
  },
  {
    id: 2,
    type: 'Yoga Flow',
    description: 'Find your inner balance with our relaxing yet energizing yoga sessions. Perfect for flexibility, strength, and mental wellness.',
    image: YogaFollowImage,
    schedule: 'Tue, Thu, Sat',
    duration: '60 mins',
    level: 'beginner',
    trainer: 'Sarah Parker'
  },
  {
    id: 3,
    type: 'Strength & Conditioning',
    description: 'Build muscle and improve your strength with our comprehensive weight training and conditioning program.',
    image: StrengthImgae,
    schedule: 'Mon, Thu',
    duration: '50 mins',
    level: 'intermediate',
    trainer: 'Mike Johnson'
  },
  {
    id: 4,
    type: 'Spinning',
    description: 'High-energy indoor cycling sessions that combine cardio endurance with rhythm-based choreography.',
    image: SpinningImgae,
    schedule: 'Wed, Fri, Sun',
    duration: '40 mins',
    level: 'intermediate',
    trainer: 'Emma Davis'
  },
  {
    id: 5,
    type: 'Core & Abs',
    description: 'Focus on strengthening your core muscles with targeted exercises for a stronger, more stable foundation.',
    image: CoreImage,
    schedule: 'Tue, Thu',
    duration: '30 mins',
    level: 'beginner',
    trainer: 'Chris Wilson'
  },
  {
    id: 6,
    type: 'CrossFit',
    description: 'Dynamic workouts combining gymnastics, weightlifting, and cardio for the ultimate fitness challenge.',
    image: CrossFitImage,
    schedule: 'Mon, Wed, Fri',
    duration: '55 mins',
    level: 'advanced',
    trainer: 'Lisa Martinez'
  }
];

const Classes = () => {

  return (
    <section className={styles.classesSection}>
      <div className={styles.decorativeShape + ' ' + styles.shape1} />
      <div className={styles.decorativeShape + ' ' + styles.shape2} />
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Our Fitness Classes</h2>
          <p className={styles.subtitle}>
            Discover a wide range of professionally guided classes designed to help you achieve your fitness goals.
            From high-intensity workouts to mindful practices, we have something for everyone.
          </p>
        </div>
{/* fds */}
        <div className={styles.classesGrid}>
          {classesData.map((gymClass) => (
            <div 
              key={gymClass.id}
              className={styles.classCard}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={gymClass.image}
                  alt={gymClass.type}
                  fill
                  className={styles.classImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`${styles.levelBadge} ${styles[gymClass.level]}`}>
                  {gymClass.level.charAt(0).toUpperCase() + gymClass.level.slice(1)}
                </div>
              </div>

              <div className={styles.classInfo}>
                <h3 className={styles.classType}>{gymClass.type}</h3>
                <p className={styles.description}>{gymClass.description}</p>
                
                <div className={styles.metaInfo}>
                  <div className={styles.schedule}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                    {gymClass.schedule}
                  </div>
                  <div className={styles.duration}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {gymClass.duration}
                  </div>
                </div>

                <button className={styles.enrollButton}>
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;