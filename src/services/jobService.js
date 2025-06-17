// src/services/jobService.js

// 1. Importamos o axios
import axios from 'axios';

const API_URL = 'https://remotive.com/api/remote-jobs?limit=20';

/**
 * Busca a lista de vagas da API da Remotive utilizando Axios.
 * @returns {Promise<Array>} Uma promessa que resolve para a lista de vagas.
 */
export async function getAllJobs() {
  try {
    // 2. Usamos axios.get() que é mais direto
    const response = await axios.get(API_URL);

    // 3. O Axios já nos entrega os dados em `response.data`
    return response.data.jobs || [];

  } catch (error) {
    // 4. O bloco catch agora captura erros de rede E erros de status HTTP (4xx, 5xx)
    console.error("Ocorreu um erro ao buscar as vagas:", error);

    // Lançamos um novo erro para que o hook que chama esta função possa tratá-lo.
    // Poderíamos também inspecionar o `error.response` do Axios para dar mensagens mais específicas.
    throw new Error('Falha ao buscar os dados da API.');
  }
}