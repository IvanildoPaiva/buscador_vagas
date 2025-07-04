// src/components/LoadingSpinner.jsx
import React from 'react';
import styles from './LoadingSpinner.module.css';

export function LoadingSpinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p>Carregando  vagas...</p>
    </div>
  );
}