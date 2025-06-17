// src/components/JobCard.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importamos o Link
import styles from './JobCard.module.css';

export function JobCard({ job }) {
  // ... (a função getTags continua a mesma)
  const getTags = () => {
    if (Array.isArray(job.tags)) { return job.tags; }
    if (typeof job.tags === 'string') { return job.tags.split(',').map(tag => tag.trim()); }
    return [];
  };
  const tags = getTags();

  // 2. Envolvemos todo o card com o componente Link
  return (
    <Link to={`/vaga/${job.id}`} state={{ job: job }} className={styles.cardLink}>
      <div className={styles.card}>
        <h2 className={styles.title}>{job.title}</h2>
        <p className={styles.company}>{job.company_name}</p>
        <p className={styles.category}>{job.category}</p>
        <div className={styles.tagsContainer}>
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        {/* O botão agora é parte do link, mas mantemos a aparência */}
        <div className={styles.applyButton}>
          Ver Detalhes
        </div>
      </div>
    </Link>
  );
}