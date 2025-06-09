// 1. Importando o componente com o nome correto e do caminho correto
import FormularioPrato from "../../components/FormularioPrato";
import './styles.css';

// 2. Renomeando a página para ser mais específica
function PaginaCadastroPrato() {
    return (
        // 3. (Opcional) Renomeando a classe CSS para maior clareza
        <div className="pagina-cadastro-prato">
            {/* 4. Renderizando o componente de formulário correto */}
            <FormularioPrato />
        </div>
    );
}

// 5. Exportando a página com o nome atualizado
export default PaginaCadastroPrato;