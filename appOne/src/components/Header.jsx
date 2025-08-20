import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.name}>David Mauricio Vargas Ramirez</h1>
        <p className={styles.subtitle}>Desarrollador Full-Stack en Proceso | Entusiasta de la IA</p>
        <a href="#about" className={styles.ctaButton}>Conoce más sobre mí</a>
      </div>
    </header>
  );
}

export default Header;