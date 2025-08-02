import React from 'react';
import styles from './HeroSection.module.css';
import '../../index.css';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaUsers, FaGlobeAmericas, FaTrophy } from 'react-icons/fa';

const PARTICLE_COUNT = 30;

export const HeroSection = () => {
  const particles = React.useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 4,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 6,
    }));
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Animated Background Overlay */}
      <div className={styles.animatedBg}></div>
      <div className={styles.particles}>
        {particles.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          ></span>
        ))}
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroImageWrapper}>
          {/* Globe Icon */}
          <motion.img
            src="/globe-icon.png"
            alt="Hack United Illustration"
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>
        <div className={styles.heroTitleWrapper}>
          {/* Title */}
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            Hack United
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            A 501(c)(3) non-profit organization that develops the soft skills in
            tech-interested youth through hands-on applications like our
            flagship hackathons.
          </motion.p>
          {/* Stats with Icons */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <div className={styles.statItem}>
              <FaUsers
                className={`${styles.statIcon} ${styles.participantsGlow}`}
              />
              <CountUp
                end={4839}
                duration={5}
                separator=","
                className={styles.participantsCounter}
              />
              <span>Participants</span>
            </div>
            <div className={styles.statItem}>
              <FaTrophy
                className={`${styles.statIcon} ${styles.awardedIcon}`}
              />
              <div className={styles.awardedAmount}>
                $
                <CountUp end={530000} duration={5} separator="," />
              </div>
              <span>Awarded</span>
            </div>
            <div className={styles.statItem}>
              <FaGlobeAmericas
                className={`${styles.statIcon} ${styles.countriesIcon}`}
              />
              <div className={styles.countriesWrapper}>
                <CountUp end={100} duration={5} />
                <span className={styles.countriesPlus}>+</span>
              </div>
              <span>Countries</span>
            </div>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3 }}
          >
            <a href="#" className={styles.primaryButton}>
              Learn More
            </a>
            <a href="#" className={styles.secondaryButton}>
              Join Hack Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
