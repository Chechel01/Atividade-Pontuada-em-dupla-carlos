import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function PaginaCardapio() {
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        const buscarPratos = async () => {
            try {
                const response = await axios.get('http://localhost:3030/usuario');
                setPratos(response.data);
            } catch (error) {
                alert('Erro ao carregar o cardápio.');
            }
        };
        buscarPratos();
    }, []);

    return (
        <div className="pagina-cardapio">
            <h1>Cardápio</h1>
            <div className="lista-cardapio">
                {pratos.length === 0 ? (
                    <p className="mensagem-vazia">Nenhum prato encontrado.</p>
                ) : (
                    pratos.map(prato => (
                        <div key={prato.id} className="card-prato">
                            <img src={prato.enderecourl} alt={prato.nomeprato} className="imagem-prato" />
                            <div className="info-prato">
                                <h2>{prato.nomeprato}</h2>
                                <p>R$ {Number(prato.preco).toFixed(2)}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default PaginaCardapio;