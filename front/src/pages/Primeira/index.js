// src/pages/Primeira/index.js (ou PaginaEntrada.js, conforme o nome correto)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logocaruru.png';

function PaginaEntrada() {
  const navigate = useNavigate();

  const handleIrParaCadastro = () => {
    navigate('/usuarios');
  };

  return (
    <div className="pagina-entrada">
      <img src={logo} alt="Logo do Restaurante" className="logo-entrada" />
      <h1>Sistema de cardápio</h1>
      <h2>Restaurante OH MAINHA</h2>
      <button onClick={handleIrParaCadastro} className="botao-entrada">
        Ir para Cadastro
      </button>
    </div>
  );
}

export default PaginaEntrada;