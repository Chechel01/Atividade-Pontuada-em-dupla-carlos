// src/pages/Primeira/index.js (ou PaginaEntrada.js, conforme o nome correto)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logocaruru.png';

function PaginaEntrada() {
  const navigate = useNavigate();

  const handleIrParaCadastro = () => {
    navigate('/pratos/cadastro');
  };

  const handleIrParaCardapio = () => {
    navigate('/cardapio');
  };

  return (
    <div className="pagina-entrada">
      <img src={logo} alt="Logo do Restaurante" className="logo-entrada" />
      <h1>Sistema de cardápio</h1>
      <h2>Restaurante OH MAINHA</h2>

      <div className="botoes-container">
        <button onClick={handleIrParaCadastro} className="botao-entrada">
          Ir para Cadastro
        </button>
        <button onClick={handleIrParaCardapio} className="botao-entrada">
          Ver Cardápio
        </button>
      </div>
    </div>
  );
}

export default PaginaEntrada;