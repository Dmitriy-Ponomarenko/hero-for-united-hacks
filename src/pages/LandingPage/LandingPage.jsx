// src/pages/LandingPage/LandingPage.jsx

import React from 'react';
import styles from './LandingPage.module.css';
import '../../index.css';
import { Header } from '../../components/Header/Header';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Other } from '../../components/Other/Other';

export const LandingPage = () => {
  return (
    <section className={`${styles.homeSection}`}>
      <div className={`${styles.homeContainer}`}>
        <Header />
        <HeroSection />
        <Other />
      </div>
    </section>
  );
};
