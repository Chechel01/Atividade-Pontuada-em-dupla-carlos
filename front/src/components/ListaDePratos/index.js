import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';
import logo from '../../assets/images/logocaruru.png';

// 1. Componente renomeado para refletir seu propósito: ListaDePratos
function ListaDePratos() {
    // 2. Estado renomeado para ser mais claro e consistente
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        const carregarPratos = async () => {
            try {
                // 3. Endpoint da API corrigido para '/pratos' (porta 8080 é o padrão do Spring Boot)
                //    Em um projeto real, a URL base (http://localhost:8080) viria de uma variável de ambiente.
                const response = await axios.get('http://localhost:8080/pratos');
                setPratos(response.data);
            } catch (error) {
                // É uma boa prática logar o erro no console para depuração
                console.error("Erro ao buscar pratos:", error);
                alert('Não foi possível carregar o cardápio. Verifique se o backend está rodando.');
                setPratos([]); // Garante que a lista fique vazia em caso de erro
            }
        };
        carregarPratos();
    }, []); // O array vazio garante que o useEffect rode apenas uma vez ao montar o componente

    // Função para formatar o preço como moeda brasileira (BRL)
    const formatarPreco = (preco) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(preco);
    };

    return (
        // 4. Classe CSS renomeada para consistência (lembre-se de atualizar o styles.css)
        <div className="lista-de-pratos">
            <img src={logo} alt="Logo Oh Mainha" className="logo" />

            {pratos.length === 0 ? (
                <p className="mensagem-vazia">Nenhum prato encontrado no cardápio.</p>
            ) : (
                <ul className="lista-pratos">
                    {/* 5. Mapeando a lista de 'pratos' e usando 'prato' como variável de iteração */}
                    {pratos.map(prato => (
                        <li key={prato.id} className="item-prato">
                            {/* Melhoria: Exibindo a imagem do prato */}
                            <img src={prato.urlImagem} alt={prato.nomePrato} className="imagem-prato" />
                            <div className="info-prato">
                                {/* 6. Acessando as propriedades com camelCase, como vêm do backend Java */}
                                <strong>Nome do Prato:</strong> {prato.nomePrato}<br />
                                <strong>Descrição:</strong> {prato.descricao}<br />
                                <strong>Preço:</strong> {formatarPreco(prato.preco)}<br />
                                <strong>Categoria:</strong> {prato.categoria}<br />
                                <strong>Disponibilidade:</strong> {prato.disponibilidade}<br />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// 7. Exportando o componente com o nome correto
export default ListaDePratos;