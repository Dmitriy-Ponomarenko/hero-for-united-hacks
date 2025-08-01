import React from 'react';
import styles from './HeroSection.module.css';
import '../../index.css';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaUsers, FaGlobeAmericas, FaTrophy } from 'react-icons/fa';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Animated Background Overlay */}
      <div className={styles.animatedBg}></div>
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <span key={i} className={styles.particle}></span>
        ))}
      </div>

      <div className={styles.heroContainer}>
        {/* Globe Icon */}
        <motion.img
          src="/globe-icon.png"
          alt="Hack United Illustration"
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Title */}
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hack United
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A 501(c)(3) non-profit organization that develops the soft skills in
          tech-interested youth through hands-on applications like our flagship
          hackathons.
        </motion.p>

        {/* Stats with Icons */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.statItem}>
            <FaUsers className={styles.statIcon} />
            <CountUp end={5000} duration={2} separator="," />
            <span>Participants</span>
          </div>
          <div className={styles.statItem}>
            <FaGlobeAmericas className={styles.statIcon} />
            <CountUp end={50} duration={2} />
            <span>Countries</span>
          </div>
          <div className={styles.statItem}>
            <FaTrophy className={styles.statIcon} />
            $<CountUp end={50000} duration={2} separator="," />
            <span>Total Prize Pool</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className={styles.buttonGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#" className={styles.primaryButton}>
            Learn More
          </a>
          <a href="#" className={styles.secondaryButton}>
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};
