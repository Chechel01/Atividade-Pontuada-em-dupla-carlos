import { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Reutilizando o CSS que você já criou
import logo from '../../assets/images/logocaruru.png';

// Este é o componente correto para o formulário
function FormularioPrato() {
    // State para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nomePrato: '',
        descricao: '',
        preco: '',
        categoria: '',
        disponibilidade: 'DISPONIVEL', // Valor padrão
        urlImagem: ''
    });

    // Função para atualizar o state quando o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para enviar os dados para o backend
    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Validação simples para o preço
        if (parseFloat(formData.preco) <= 0) {
            alert("O preço deve ser um número positivo.");
            return;
        }

        try {
            // Enviando os dados para o endpoint de criação no backend
            const response = await axios.post('http://localhost:8080/pratos', formData);
            
            // Se a requisição for bem-sucedida (status 201 Created)
            alert(`Prato "${response.data.nomePrato}" cadastrado com sucesso!`);
            
            // Limpa o formulário após o sucesso
            setFormData({
                nomePrato: '',
                descricao: '',
                preco: '',
                categoria: '',
                disponibilidade: 'DISPONIVEL',
                urlImagem: ''
            });

        } catch (error) {
            // Tratamento de erros
            if (error.response) {
                // O backend retornou um erro (ex: nome duplicado, validação)
                const errorMessage = error.response.data.mensagem || "Ocorreu um erro ao cadastrar o prato.";
                alert(`Erro: ${errorMessage}`);
            } else {
                // Erro de rede ou o backend não está rodando
                alert("Não foi possível se conectar ao servidor. Verifique se o backend está em execução.");
            }
            console.error("Erro ao cadastrar prato:", error);
        }
    };

    return (
        <div className="container"> {/* Usando a classe 'container' do seu CSS */}
            <img src={logo} alt="Logo" />
            <h2>Cadastro de Novo Prato</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nomePrato"
                    value={formData.nomePrato}
                    onChange={handleChange}
                    placeholder="Nome do Prato"
                    required
                />
                <input
                    type="text"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder="Descrição do Prato"
                    required
                />
                <input
                    type="number"
                    name="preco"
                    value={formData.preco}
                    onChange={handleChange}
                    placeholder="Preço (Ex: 55.90)"
                    step="0.01"
                    required
                />
                <input
                    type="text"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    placeholder="Categoria (Ex: Prato Principal)"
                    required
                />
                <input
                    type="text"
                    name="urlImagem"
                    value={formData.urlImagem}
                    onChange={handleChange}
                    placeholder="URL da Imagem do Prato"
                    required
                />
                <select name="disponibilidade" value={formData.disponibilidade} onChange={handleChange} required>
                    <option value="DISPONIVEL">Disponível</option>
                    <option value="INDISPONIVEL">Indisponível</option>
                </select>
                
                <button type="submit">Cadastrar Prato</button>
            </form>
        </div>
    );
}

export default FormularioPrato;