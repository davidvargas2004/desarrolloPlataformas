import React from 'react';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  const skills = ['Python', 'React', 'JavaScript', 'SQL', 'PHP', 'Bootstrap'];

  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Tecnologías y Habilidades</h2>
      <div className={styles.skillsGrid}>
        {skills.map(skill => (
          <div key={skill} className={styles.skillCard}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;