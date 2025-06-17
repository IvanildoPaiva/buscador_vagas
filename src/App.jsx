// src/App.jsx

import { HomePage } from './pages/HomePage';
import './App.css'; // Vamos criar este arquivo para estilos globais

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1>Buscador de Vagas para Dev´s</h1>
        <p>Encontre aqui a sua próxima oportunidade remota.</p>
      </header>
      <HomePage />
    </div>
  )
}

export default App