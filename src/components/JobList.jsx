// src/components/JobList.jsx

import React from 'react';
import { JobCard } from './JobCard'; // Importamos nosso componente de cartão

// Este componente recebe a lista de vagas via props
export function JobList({ jobs }) {
  
  // Se não houver vagas (ainda), podemos mostrar uma mensagem
  if (!jobs || jobs.length === 0) {
    return <p>Nenhuma vaga encontrada.</p>;
  }

  // Se houver vagas, usamos .map() para criar um JobCard para cada uma
  return (
    <div>
      {jobs.map(job => (
        // A prop `key` é essencial para o React otimizar a renderização de listas.
        // Deve ser um valor único para cada item, como o id da vaga.
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}