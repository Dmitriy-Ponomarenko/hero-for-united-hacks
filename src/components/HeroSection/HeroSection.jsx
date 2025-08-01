import React from 'react';
import styles from './HeroSection.module.css';
import '../../index.css';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Picture */}
        <motion.img
          src="/globe-icon.png"
          alt="Hack United Illustration"
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Title */}
        <div className={styles.titleWrapper}>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
          >
            Hack United
          </motion.h1>
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A 501(c)(3) non-profit organization that develops the soft skills in
          tech interested youth through hands-on application, such as our
          flagship hackathons.
        </motion.p>
        {/* Counter */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.statItem}>
            <CountUp end={5000} duration={2} separator="," />
            <span>Participants</span>
          </div>
          <div className={styles.statItem}>
            <CountUp end={50} duration={2} />
            <span>Countries</span>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statItemWrapper}>
              $<CountUp end={50000} duration={2} separator="," />
            </div>
            <span>Total Prize Pool</span>
          </div>
        </motion.div>
        {/* CTA */}
        <motion.a
          href="#"
          className={styles.heroButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Learn more &nbsp; &gt;
        </motion.a>
      </div>
    </section>
  );
};
