// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import { JobDetailPage } from './pages/JobDetailPage' // Vamos criar esta página

// Criamos nosso roteador com as rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/", // A rota raiz (página inicial)
    element: <App />,
  },
  {
    path: "/vaga/:jobId", // Uma rota dinâmica para os detalhes da vaga
    element: <JobDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Usamos o RouterProvider para disponibilizar as rotas para a aplicação */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)