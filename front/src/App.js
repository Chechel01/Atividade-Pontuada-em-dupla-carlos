import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importando os componentes de página com seus nomes finais e corretos
import PaginaEntrada from './pages/PaginaEntrada'; 
import PaginaCadastroPrato from './pages/CadastroPrato';
import PaginaCardapio from './pages/Cardapio';

// Importa o CSS global da aplicação
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota Raiz: a página inicial da sua aplicação */}
        <Route path="/" element={<PaginaEntrada />} />

        {/* 2. Rota para a página de cardápio/listagem de pratos */}
        {/* Unificamos as duas páginas de lista em uma só */}
        <Route path="/cardapio" element={<PaginaCardapio />} />

        {/* 3. Rota para o formulário de cadastro de um novo prato */}
        {/* É uma boa prática aninhar rotas relacionadas (ex: /pratos/cadastro) */}
        <Route path="/pratos/cadastro" element={<PaginaCadastroPrato />} />

        {/* A antiga rota '/Lista' foi removida por ser redundante com '/cardapio' */}
      </Routes>
    </Router>
  );
}

export default App;
