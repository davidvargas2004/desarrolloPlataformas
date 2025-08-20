import React from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2 className={styles.title}>Experiencia Profesional</h2>
      <div className={styles.job}>
        <h3 className={styles.jobTitle}>Desarrollador de Software Freelance</h3>
        <p className={styles.jobDescription}>
          He colaborado con pequeñas empresas en el desarrollo de soluciones de software a medida. Esta experiencia me ha permitido aplicar mis conocimientos en entornos reales, gestionar proyectos de principio a fin y perfeccionar mis habilidades de comunicación y resolución de problemas.
        </p>
      </div>
    </section>
  );
}

export default Experience;