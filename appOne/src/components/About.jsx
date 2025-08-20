import React from 'react';
import styles from '../styles/About.module.css';
import profileImage from '../assets/profile-image.jpg'; // 

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>Sobre Mí</h2>
      <div className={styles.aboutContent}>
        <div className={styles.imageContainer}>
          <img src={profileImage} alt="David Mauricio Vargas Ramirez" className={styles.profileImage} />
        </div>
        <div className={styles.textContainer}>
          <p>Tengo 22 años y soy un apasionado estudiante de <strong>Ingeniería de Sistemas</strong> en la Universidad Uniminuto de Dios (inicio en 2023).</p>
          <p>Me fascina el mundo de la programación, la <strong>inteligencia artificial</strong> y mantenerme activo en el gimnasio. Mi gran meta es convertirme en un miembro valioso para la industria de TI.</p>
          <p>Disfruto enormemente experimentar con modelos de IA, entrenarlos y desentrañar la "magia" que hay detrás. Me encuentro en un emocionante camino para ser un desarrollador Full-Stack competente y versátil.</p>
        </div>
      </div>
    </section>
  );
}

export default About;