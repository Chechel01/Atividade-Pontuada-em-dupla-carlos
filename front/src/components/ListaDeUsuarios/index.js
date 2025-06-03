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
                const response = await axios.get('http://localhost:8080/usuario');
                setUsuarios(response.data);
            } catch (error) {
                alert('Erro ao buscar pratos.');
                setUsuarios([]);
            }
        };
        carregarUsuarios();
    }, []);

    return (
        <ul id="listaUsuarios" className="lista-usuarios">
            <img src={logo} alt="Logo" className="logo" />
            {usuarios.length === 0 ? (
                <li>Nenhum prato encontrado.</li>
            ) : (
                usuarios.map(usuario => (
                    <li key={usuario.id}>
                        <strong>Nome: </strong> {usuario.nomeprato}<br />
                        <strong>Sexo: </strong> {usuario.descricao}<br />
                        <strong>Idade: </strong> {usuario.preco}<br />
                        <strong>Altura: </strong> {usuario.categoria}<br />
                        <strong>Peso: </strong> {usuario.disponibilidade}<br />
                        <strong>Posição: </strong> {usuario.enderecourl}<br />    
                    </li>
                ))
            )}
        </ul>
    );
}

export default ListaDeUsuarios;