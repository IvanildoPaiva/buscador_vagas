// src/components/ErrorMessage.jsx
import React from 'react';
import styles from './ErrorMessage.module.css';

export function ErrorMessage({ message }) {
  return (
    <div className={styles.errorContainer}>
      <p>Oops! Algo deu errado.</p>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
}