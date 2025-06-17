# Buscador de Vagas de Emprego


Projeto desenvolvido como parte de um estudo prático de ReactJS, focado em boas práticas, componentização, hooks e arquitetura de software limpo.
#
Demo do Projeto.
![Demo da Aplicação](https://i.imgur.com/S1dyujw.png)

## ✨ Funcionalidades

- **Listagem de Vagas:** Consome a API da Remotive para buscar e exibir vagas de emprego remotas.
- **Busca em Tempo Real:** Filtra as vagas por cargo, empresa ou tecnologia conforme o usuário digita.
- **Otimização com Debouncing:** A busca só é acionada após o usuário parar de digitar, garantindo a performance da aplicação.
- **Roteamento:** Aplicação com múltiplas páginas (Home e Detalhes da Vaga) utilizando `react-router-dom`.
- **Design Responsivo:** Interface limpa e agradável que se adapta a diferentes tamanhos de ecrã.

## 🛠️ Tecnologias e Padrões Utilizados

- **ReactJS** (com Hooks)
- **Vite** (Ambiente de desenvolvimento)
- **JavaScript**
- **CSS Modules** (Estilização por componente)
- **Axios** (Cliente HTTP para chamadas à API)
- **React Router DOM** (Para roteamento)
- **Padrões de Projeto:**
  - Arquitetura em Camadas (Services, Hooks, UI)
  - Custom Hooks (`useFetchJobs`, `useDebounce`)
  - Elevação de Estado (Lifting State Up)
  - Componentes Controlados

## ⚙️ Como Executar o Projeto Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/IvanildoPaiva/buscador_vagas.git-vagas.git

# 2. Navegue até a pasta do projeto
cd jobs

# 3. Instale as dependências
npm install

# 4. Inicie a aplicação
npm run dev

