import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Supondo que você terá um CSS para esta página

function PaginaCardapio() {
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        const buscarPratos = async () => {
            try {
                // 1. CORREÇÃO: Endpoint da API ajustado para buscar em /pratos
                // A porta padrão do Spring Boot é 8080
                const response = await axios.get('http://localhost:8080/pratos');
                setPratos(response.data);
            } catch (error) {
                // Boa prática: logar o erro no console para facilitar a depuração
                console.error('Erro ao carregar o cardápio:', error);
                alert('Erro ao carregar o cardápio. Verifique se o servidor backend está rodando.');
            }
        };
        buscarPratos();
    }, []);

    // Melhoria: Função para formatar o preço como moeda (R$)
    const formatarPreco = (preco) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(preco);
    };

    return (
        <div className="pagina-cardapio">
            <h1>Nosso Cardápio</h1>
            <div className="lista-cardapio">
                {pratos.length === 0 ? (
                    <p className="mensagem-vazia">Nenhum prato encontrado no momento.</p>
                ) : (
                    pratos.map(prato => (
                        <div key={prato.id} className="card-prato">
                            {/* 2. CORREÇÃO: A propriedade da imagem é 'urlImagem' */}
                            <img src={prato.urlImagem} alt={prato.nomePrato} className="imagem-prato" />
                            <div className="info-prato">
                                {/* 3. CORREÇÃO: As propriedades são em camelCase (ex: nomePrato) */}
                                <h2>{prato.nomePrato}</h2>
                                <p className="preco-prato">{formatarPreco(prato.preco)}</p>
                                <p className="descricao-prato">{prato.descricao}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default PaginaCardapio;