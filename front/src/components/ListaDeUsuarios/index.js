// src\components\ListaDeUsuarios\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'
import logo from '../../assets/images/logocaruru.png';

function ListaDeUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:3030/usuario');
                setUsuarios(response.data);
            } catch (error) {
                alert('Erro ao buscar pratos.');
                setUsuarios([]);
            }
        };
        carregarUsuarios();
    }, []);

    return (
        <div className="lista-de-usuarios">
            <img src={logo} alt="Logo" className="logo" />

            {usuarios.length === 0 ? (
                <p className="mensagem-vazia">Nenhum prato encontrado.</p>
            ) : (
                <ul className="lista-usuarios">
                    {usuarios.map(usuario => (
                        <li key={usuario.id}>
                            <strong>Nomeprato: </strong> {usuario.nomeprato}<br />
                            <strong>Descrição: </strong> {usuario.descricao}<br />
                            <strong>Preço: </strong> {usuario.preco}<br />
                            <strong>Categoria: </strong> {usuario.categoria}<br />
                            <strong>Disponibilidade: </strong> {usuario.disponibilidade}<br />
                            <strong>URL da Imagem: </strong> {usuario.urlimagem}<br />    
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaDeUsuarios;