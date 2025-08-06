
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './TestCalendarModal.module.css';
import dynamic from 'next/dynamic';

const EventCalendar = dynamic(() => import('./EventCalendar'), { ssr: false });


const TestCalendarModal = ({ openFromNavBar, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  // Si viene desde NavBar, el control es externo
  const showModal = openFromNavBar !== undefined ? openFromNavBar : isOpen;

  if (!showModal) return null;

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Calendario Escolar 2025</h2>
        <EventCalendar />
        <button onClick={closeModal} className={styles.closeButton}>
          Cerrar
        </button>
      </div>
    </div>,
    typeof window !== 'undefined' ? document.body : null
  );
};

export default TestCalendarModal;
