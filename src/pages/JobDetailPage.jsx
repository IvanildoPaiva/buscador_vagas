// src/pages/JobDetailPage.jsx

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './JobDetailPage.module.css';

export function JobDetailPage() {
  // O hook useLocation nos dá acesso ao objeto de localização,
  // que inclui o `state` que passamos pelo Link.
  const location = useLocation();
  const { job } = location.state || {}; // Pegamos o objeto 'job' do estado

  // Se o usuário navegar diretamente para a URL sem clicar num card,
  // o estado 'job' não existirá.
  if (!job) {
    return (
      <div className={styles.container}>
        <p>Informações da vaga não encontradas.</p>
        <Link to="/" className={styles.backLink}>Voltar para a lista</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>&larr; Voltar para a lista</Link>
      <header className={styles.header}>
        <h1 className={styles.title}>{job.title}</h1>
        <p className={styles.company}>{job.company_name} - <span>{job.category}</span></p>
      </header>

      <div className={styles.description}>
        <h2>Descrição da Vaga</h2>
        {/* CUIDADO: A API retorna HTML. Usar `dangerouslySetInnerHTML` é a única forma
            de renderizar isso. Só faça isso se confiar 100% na fonte da API,
            pois pode abrir portas para ataques XSS. */}
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
      </div>
    </div>
  );
}