import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormularioCadastro from './pages/Cadastro';
import ListaDeUsuarios from './pages/Lista';
import PaginaEntrada from './pages/Primeira'; 
import PaginaCardapio from './pages/Cardapio';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaEntrada />} />
        <Route path="/cardapio" element={<PaginaCardapio />} />
        <Route path="/usuarios" element={<FormularioCadastro />} />
        <Route path="/Lista" element={<ListaDeUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;