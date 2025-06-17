// src/components/SearchBar.jsx

import React from 'react';
import styles from './SearchBar.module.css';

// Recebe o valor atual da busca (value) e a função para alterá-lo (onChange)
export function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Filtrar por cargo, empresa ou tecnologia..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}