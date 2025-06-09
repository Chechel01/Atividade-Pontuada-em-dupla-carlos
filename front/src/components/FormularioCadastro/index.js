import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logocaruru.png';
import useMensagem from '../../hooks/useMensagem';
import MensagemFeedback from '../MensagemFeedback';
import axios from 'axios';

function FormularioCadastro() {
    const [nomeprato, setNomePrato] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [enderecourl, setEnderecourl] = useState('');

    const navigate = useNavigate();
    const { mostrarMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem();

    const cadastroUsuarios = async (event) => {
        event.preventDefault();  // Evitar que a página recarregue ao submeter o formulário
        try {
            const response = await axios.post('http://localhost:3030/usuario', {
                nomeprato,
                descricao,
                preco,
                categoria,
                disponibilidade,
                enderecourl
            });
            mostrarMensagem(response.data.mensagem || 'Prato cadastrado com sucesso!', 'sucesso');
            setNomePrato('');
            setDescricao('');
            setPreco('');
            setCategoria('');
            setDisponibilidade(''); 
            setEnderecourl(''); 
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor. ';
            if (error.response && error.response.data) {
                erroMsg += error.response.data.mensagem || 'Erro ao cadastrar prato.';
                if (error.response.data.erros) {
                    erroMsg += ' ' + error.response.data.erros.join(', ');
                }
            }
            mostrarMensagem(erroMsg, 'erro');
        }
    };

    return (
        <div className="container">
            <div className="formulario-cadastro">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Formulario</h1>
                <form onSubmit={cadastroUsuarios}>
                    <input
                        type="text"
                        placeholder="Nome do Prato"
                        value={nomeprato}
                        onChange={(e) => setNomePrato(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Preco"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Disponibilidade"
                        value={disponibilidade}
                        onChange={(e) => setDisponibilidade(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Link da imagem"
                        value={enderecourl}
                        onChange={(e) => setEnderecourl(e.target.value)}
                        required
                    />
                    <button type="submit">Cadastrar</button>
                </form>
                <button onClick={() => navigate('/Lista')} className="link-usuarios">
                    Ver pratos cadastrados
                </button>

                <MensagemFeedback
                    mensagem={mensagem}
                    tipoMensagem={tipoMensagem}
                    visivel={visivel}
                    fecharMensagem={fecharMensagem}
                />
            </div>
        </div>
    );
}

export default FormularioCadastro;