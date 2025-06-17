// src/hooks/useFetchJobs.jsx

import { useState, useEffect } from 'react';

// A URL da API pública que vamos usar
const API_URL = 'https://remotive.com/api/remote-jobs?limit=20';

export function useFetchJobs() {
  // Estado para armazenar a lista de vagas
  const [jobs, setJobs] = useState([]);

  // Estado para controlar o status de carregamento (loading)
  const [loading, setLoading] = useState(true);

  // Estado para armazenar qualquer erro que ocorra na busca
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função assíncrona para buscar os dados
    async function fetchJobs() {
      try {
        // Inicia a busca, define o loading como true
        setLoading(true);
        setError(null); // Limpa erros anteriores

        const response = await fetch(API_URL);
        if (!response.ok) {
          // Se a resposta da rede não for bem-sucedida, lançamos um erro
          throw new Error('Falha ao buscar os dados da API');
        }
        const data = await response.json();

        // Armazena apenas a lista de 'jobs' que vem dentro dos dados
        setJobs(data.jobs);

      } catch (err) {
        // Se ocorrer um erro no bloco 'try', ele é capturado aqui
        setError(err.message);
        console.error(err); // Também é uma boa prática logar o erro no console
      } finally {
        // Este bloco é executado sempre, seja com sucesso ou com erro
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchJobs(); // Executa a função de busca
  }, []); // O array vazio [] significa que este efeito só executa uma vez, quando o componente é montado

  // O hook retorna os dados e os estados para quem o usar
  return { jobs, loading, error };
}