import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormularioCadastro from './pages/Cadastro';
import ListaDeUsuarios from './pages/Lista';
import PaginaEntrada from './pages/Primeira'; // Renomeado para clareza
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaEntrada />} />
        <Route path="/usuarios" element={<FormularioCadastro />} />
        <Route path="/Lista" element={<ListaDeUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;