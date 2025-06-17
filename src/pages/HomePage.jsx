import React, { useState } from 'react';
import { useFetchJobs } from '../hooks/useFetchJobs';
import { useDebounce } from '../hooks/useDebounce'; // 1. Importamos nosso novo hook
import { JobList } from '../components/JobList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { SearchBar } from '../components/SearchBar';

export function HomePage() {
  const { jobs, loading, error } = useFetchJobs();
  const [searchTerm, setSearchTerm] = useState('');

  // 2. Usamos o hook para criar uma versão "debounced" do termo de busca
  // O filtro só será re-calculado quando este valor mudar.
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms de atraso

  // 3. A lógica de filtro agora usa o `debouncedSearchTerm`
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    job.company_name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    job.category.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const renderContent = () => {
    // A lógica de loading inicial não muda. O debounce afeta apenas o filtro.
    if (loading && jobs.length === 0) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <ErrorMessage message={error} />;
    }

    // Se a busca debounced não retornar resultados, mostramos uma mensagem
    if (!loading && filteredJobs.length === 0 && debouncedSearchTerm) {
        return <p>Nenhuma vaga encontrada para "{debouncedSearchTerm}".</p>
    }

    return <JobList jobs={filteredJobs} />;
  };

  return (
    <main>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {renderContent()}
    </main>
  );
}