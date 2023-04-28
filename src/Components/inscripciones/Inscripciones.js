import React, { useState } from 'react';
import styles from './Inscripciones.module.css'
import Link from 'next/link';



const Inscripciones = () => {

  const [showText, setShowText] = useState('')

  const handleMouseEnter = (text) => {
    setShowText(text)
  }

  const handleMouseLeave = () => {
    setShowText('')
  }
  return (
    <div id='inscripciones' className={styles.container}>
      <h1 className={styles.title}>Comienza a estudiar con nosotros<span></span></h1>
      <div className={styles.content}>
        <Link href={''} className={styles.content__image}
          onMouseEnter={() => handleMouseEnter(`ingresa`)}
          onMouseLeave={() => handleMouseLeave()}>
          <div style={{ opacity: showText === '' ? 1 : 0, transition: `opacity 0.3s ease` }}>
            <h2>CONSTRUYE TU FUTURO...</h2>
            <p>Nuestros programas curriculares y actividades extracurriculares te permitirán desarrollar tus habilidades y tus talentos. ¡Inscríbete hoy y únete a nuestra comunidad de estudiantes apasionados y comprometidos! que esperas?.</p>
          </div>
          <h2 className={styles.content__title__inscripcion} style={{ opacity: showText === 'ingresa' ? 1 : 0, transition: `opacity 0.3s ease` }}>INSCRIBITE</h2>
        </Link>
      </div >
    </div >
  );
};

export default Inscripciones;

