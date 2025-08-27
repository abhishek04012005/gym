'use client';
import { useState } from 'react';
import styles from './schedule.module.css';

interface ClassSchedule {
  id: number;
  className: string;
  time: string;
  period: string;
  duration: string;
  trainer: {
    name: string;
    role: string;
  };
  capacity: {
    total: number;
    booked: number;
  };
  level: string;
}

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const scheduleData: Record<string, ClassSchedule[]> = {
  Monday: [
    {
      id: 1,
      className: 'High Intensity Training',
      time: '6:00',
      period: 'AM',
      duration: '45 mins',
      trainer: {
        name: 'David Anderson',
        role: 'HIIT Specialist'
      },
      capacity: {
        total: 20,
        booked: 15
      },
      level: 'Advanced'
    },
    {
      id: 2,
      className: 'Yoga Flow',
      time: '8:00',
      period: 'AM',
      duration: '60 mins',
      trainer: {
        name: 'Sarah Martinez',
        role: 'Yoga Instructor'
      },
      capacity: {
        total: 15,
        booked: 10
      },
      level: 'All Levels'
    },
    {
      id: 3,
      className: 'Strength & Conditioning',
      time: '10:00',
      period: 'AM',
      duration: '50 mins',
      trainer: {
        name: 'James Wilson',
        role: 'Strength Coach'
      },
      capacity: {
        total: 12,
        booked: 8
      },
      level: 'Intermediate'
    },
    {
      id: 4,
      className: 'Spin Class',
      time: '5:30',
      period: 'PM',
      duration: '45 mins',
      trainer: {
        name: 'Emily Chen',
        role: 'Cycling Instructor'
      },
      capacity: {
        total: 25,
        booked: 22
      },
      level: 'All Levels'
    },
    {
      id: 5,
      className: 'Boxing Fundamentals',
      time: '7:00',
      period: 'PM',
      duration: '60 mins',
      trainer: {
        name: 'Mike Thompson',
        role: 'Boxing Coach'
      },
      capacity: {
        total: 15,
        booked: 12
      },
      level: 'Beginner'
    }
  ],
  // Add similar data for other days
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  
  return (
    <section className={styles.scheduleSection}>
      <div className={`${styles.decorativeShape} ${styles.shape1}`} />
      <div className={`${styles.decorativeShape} ${styles.shape2}`} />
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Class Schedule</h2>
          <p className={styles.subtitle}>
            Find the perfect class that fits your schedule. Join our expert-led sessions
            designed to help you achieve your fitness goals.
          </p>
        </div>

        <div className={styles.scheduleContainer}>
          <div className={styles.tabs}>
            {weekDays.map((day) => (
              <button
                key={day}
                className={`${styles.tab} ${activeDay === day ? styles.tabActive : ''}`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <div className={styles.scheduleGrid}>
            {scheduleData[activeDay]?.map((item) => (
              <div key={item.id} className={styles.scheduleItem}>
                <div className={styles.timeSlot}>
                  <div className={styles.time}>{item.time}</div>
                  <div className={styles.period}>{item.period}</div>
                </div>

                <div className={styles.classInfo}>
                  <h3 className={styles.className}>{item.className}</h3>
                  <div className={styles.classDetails}>
                    <span className={styles.detail}>
                      <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                      </svg>
                      {item.duration}
                    </span>
                    <span className={styles.detail}>
                      <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                      </svg>
                      {item.level}
                    </span>
                  </div>
                </div>

                <div className={styles.trainer}>
                  <div className={styles.trainerName}>{item.trainer.name}</div>
                  <div className={styles.trainerRole}>{item.trainer.role}</div>
                </div>

                <div>
                  <button className={styles.bookButton}>
                    Book Now
                  </button>
                  <div className={`${styles.spots} ${item.capacity.booked >= item.capacity.total - 3 ? styles.spotsLimited : ''}`}>
                    {item.capacity.total - item.capacity.booked} spots left
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;