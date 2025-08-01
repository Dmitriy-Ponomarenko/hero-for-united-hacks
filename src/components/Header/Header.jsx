import React from 'react';
import styles from './Header.module.css';
import '../../index.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2 className={styles.logo}></h2>
      </div>
    </header>
  );
};
