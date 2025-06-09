import ListaDePratos from '../../components/ListaDePratos'; // 1. Importa o componente correto
import { useNavigate } from 'react-router-dom';
import './styles.css';

// 2. Componente da página renomeado
function PaginaListaPratos() {
    const navigate = useNavigate();
    
    // Função para navegar para a página de cadastro
    const irParaCadastro = () => {
        navigate('/pratos/cadastro'); // 3. Rota corrigida para o cadastro de pratos
    };

    return (
        // 4. Classe CSS renomeada
        <div className='pagina-lista-pratos'>
            <div className='container-lista'>
                {/* 5. Título corrigido */}
                <h2>Cardápio / Lista de Pratos</h2>

                {/* 6. Renderizando o componente correto */}
                <ListaDePratos />

                {/* 7. Botão com ação e texto claros */}
                <button onClick={irParaCadastro} className='botao-adicionar'>
                    Adicionar Novo Prato
                </button>
            </div>
        </div>
    );
}

export default PaginaListaPratos;