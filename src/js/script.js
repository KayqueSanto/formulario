document.addEventListener('DOMContentLoaded', function() {
    // Atualiza os formulários quando a quantidade é alterada
    document.getElementById('quantidade').addEventListener('change', function() {
        const quantidade = parseInt(this.value);
        const container = document.getElementById('formulariosContainer');
        container.innerHTML = ''; // Limpa os formulários existentes

        // Adiciona os novos formulários conforme a quantidade selecionada
        for (let i = 0; i < quantidade; i++) {
            const novoFormulario = `
    <div class="formulario">
        <h2>Solicitação ${i + 1}</h2>
        <!-- Campos do formulário -->
        <label for="empresa${i + 1}">Empresa:</label>
        <select id="empresa${i + 1}" name="empresa${i + 1}" class="empresa" onchange="toggleCampoAdicionalEmpresa(${i + 1})" required>
            <option value="" disabled selected>--Selecione--</option>
            <option value="PARANOA">PARANOA</option>
            <option value="DATAWAKE">DATAWAKE</option>
        </select>

                 <!-- Campo adicional -->
     <div id="campoEmpresaParanoa${i + 1}" style="display: none;">
        <label for="campoExtraEmpresaParanoa${i + 1}">Unidade de Negócio:</label>
        <select id="campoExtraEmpresaParanoa${i + 1}" class="unidadeDeNegocio" name="campoExtraEmpresaParanoa${i + 1}">
            <option value="" disabled selected>--Selecione--</option>
            <option value="MANGUEIRA">MANGUEIRA</option>
            <option value="TAPETE">TAPETE</option>
        </select>
    </div>

    <label for="tipoMaterial${i + 1}">Tipo do Material:</label>
    <select id="tipoMaterial${i + 1}" name="tipoMaterial${i + 1}" class="tipoDeMaterial" onchange="toggleCampoAdicional(${i + 1})" required>
        <option value="" disabled selected>--selecione--</option>
        <option value="MF - MATERIAL DE FERRAMENTARIA">MF - MATERIAL DE FERRAMENTARIA</option>
        <option value="MP - MATERIA PRIMA">MP - MATERIA PRIMA</option>
        <option value="MA - MATERIAL AUXILIAR">MA - MATERIAL AUXILIAR</option>
        <option value="MC - MATERIAL DE CONSUMO">MC - MATERIAL DE CONSUMO</option>
        <option value="MN - MATERIAL DE MANUTENÇÃO">MN - MATERIAL DE MANUTENÇÃO</option>
        <option value="GG - EPI'S">GG - EPI'S</option>
        <option value="AI -  ATIVO IMOBILIZADO">AI -  ATIVO IMOBILIZADO</option>
        <option value="EM - EMBALAGEM">EM - EMBALAGEM</option>
        <option value="SV - SERVIÇO">SV - SERVIÇO</option>
        <option value="MT - MATERIAL DE TERCEIROS">MT - MATERIAL DE TERCEIROS</option>
        <!-- Outras opções aqui -->
    </select>

    <!-- Campo adicional -->
    <div id="campoAdicional${i + 1}" style="display: none;">
            <label for="campoExtra${i + 1}">Escolha:</label>
            <select id="campoExtra${i + 1}" class="mc" name="campoExtra${i + 1}">
                <option value="">-- Selecione --</option>
                <option value="ALIMENTAÇÕES">ALIMENTAÇÕES</option>
                <option value="BRINDES">BRINDES</option>
                <option value="CESTA BÁSICA">CESTA BÁSICA</option>
                <option value="DIVERSOS">DIVERSOS</option>
                <option value="INFORMÁTICA">INFORMÁTICA</option>
                <option value="LIMPEZA">LIMPEZA</option>
                <option value="MATERIAL DE ESCRITORIO">MATERIAL DE ESCRITORIO</option>
                <option value="MATERIAL DE CONSTRUÇÃO">MATERIAL DE CONSTRUÇÃO</option>
                <option value="MATERIAL DE VEICULOS">MATERIAL DE VEICULOS</option>
                <option value="MOVEIS">MOVEIS</option>
                <option value="PRODUÇÃO">PRODUÇÃO</option>
                <option value="SEGURANÇA">SEGURANÇA</option>
            </select>
        </div>

        <!-- Campo adicional -->
        <div id="campoAdicional1${i + 1}" style="display: none;">
            <label for="campoExtra1${i + 1}">Escolha:</label>
            <select id="campoExtra1${i + 1}" class="mn" name="campoExtra1${i + 1}">
                <option value="">-- Selecione --</option>
                <option value="MANUTENÇÃO ELÉTRICA">MANUTENÇÃO ELÉTRICA</option>
                <option value="MANUTENÇÃO MECÂNICA">MANUTENÇÃO MECÂNICA</option>
                <option value="MANUTENÇÃO PREDIAL">MANUTENÇÃO PREDIAL</option>
            </select>
        </div>

            <!-- Campo adicional -->
            <div id="campoAdicional3${i + 1}" style="display: none;">
                    <label for="campoExtra3${i + 1}">Escolha:</label>
                    <select id="campoExtra3${i + 1}" class="gg" name="campoExtra3${i + 1}">
                        <option value="">-- Selecione --</option>
                        <option value="UNIFORMES">UNIFORMES</option>
                        <option value="EQUIPAMENTOS DE SEGURANÇA">EQUIPAMENTOS DE SEGURANÇA</option>
                    </select>
                </div>

                <!-- Campo adicional -->
            <div id="campoAdicional4${i + 1}" style="display: none;">
                    <label for="campoExtra4${i + 1}">Escolha:</label>
                    <select id="campoExtra4${i + 1}" class="escolha" name="campoExtra4${i + 1}">
                        <option value="">-- Selecione --</option>
                        <option value="MAQUINAS E EQUIPAMENTOS">MAQUINAS E EQUIPAMENTOS</option>
                        <option value="MOVEIS E UTENSILIOS">MOVEIS E UTENSILIOS</option>
                        <option value="VEICULOS">VEICULOS</option>
                        <option value="BENFEITORIAS">BENFEITORIAS</option>
                        <option value="PROCESSAMENTO DE DADOS">PROCESSAMENTO DE DADOS</option>
                    </select>
                    
                    <!-- Novos campos para Ativo Imobilizado -->
                    <div id="campoUtilizacao${i + 1}" style="display: none;">
                        <label for="utilizacao${i + 1}">Utilização:</label>
                        <select id="utilizacao${i + 1}" class="utilizacao" name="utilizacao${i + 1}">
                            <option value="">-- Selecione --</option>
                            <option value="FABRICA">FABRICA</option>
                            <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
                            <option value="LABORATORIO">LABORATORIO</option>
                        </select>
                    </div>
                    
                    <div id="campoCondicao${i + 1}" style="display: none;">
                        <label for="condicao${i + 1}">Condição:</label>
                        <select id="condicao${i + 1}" class="condicao" name="condicao${i + 1}">
                            <option value="">-- Selecione --</option>
                            <option value="NOVO">NOVO</option>
                            <option value="USADO">USADO</option>
                        </select>
                        </div>
                </div>

        <label for="centroCusto${i + 1}">Centro de Custo:</label>
        <input type="text" id="centroCusto${i + 1}" name="centroCusto${i + 1}" maxlength="5" class="centroCusto"  oninput="validarCentroCusto(${i + 1})" required>

        <label for="detalhamento${i + 1}">Detalhamento/Finalidade:</label>
        <textarea id="detalhamento${i + 1}" name="detalhamento${i + 1}" class="detalhamento" rows="4" cols="50" required></textarea>
      
        <label for="descritivo${i + 1}">Descritivo do Material:</label>
        <input type="text" id="descritivo${i + 1}" name="descritivo${i + 1}" class="descritivo" maxlength="100" placeholder="--Máximo 100 caracteres--" required>

        <label for="ncm${i + 1}">NCM:</label>
        <input type="text" id="ncm${i + 1}" name="ncm${i + 1}" maxlength="8" class="ncm" placeholder="--Deve conter 8 digitos--" required>

        <label for="importado${i + 1}">Material Importado?</label>
        <select id="importado${i + 1}" name="importado${i + 1}" class="materialImportado" onchange="toggleValor(${i + 1})" required>
            <option value="" disabled selected>--selecione--</option>
            <option value="NÃO">Não</option>
            <option value="SIM">Sim</option>
        </select>

        <label for="unidadeMedida${i + 1}">Unidade de Medida:</label> 
        <select id="unidadeMedida${i + 1}" class="unidadeDeMedida" name="unidadeMedida${i + 1}" required>
        <option value="" disabled selected>--selecione--</option>
        <option value="L - LITRO">L - LITRO</option>
        <option value="M - METRO">M - METRO</option>
        <option value="UN - UNIDADE">UN - UNIDADE</option>
        <option value="KG - QUILOGRAMA">KG - QUILOGRAMA</option>
            <!-- Outras opções aqui -->
        </select>
    </div>
`;
            container.insertAdjacentHTML('beforeend', novoFormulario);
        }
    });

    // Dispara o evento 'change' ao carregar a página para exibir o formulário inicial
    document.getElementById('quantidade').dispatchEvent(new Event('change'));
});

function toggleCampoAdicionalEmpresa(index) {
    const empresa = document.getElementById(`empresa${index}`);
    const campoEmpresaParanoa = document.getElementById(`campoEmpresaParanoa${index}`);

    switch (empresa.value) {
        case "PARANOA":
            campoEmpresaParanoa.style.display = 'block';
            break
        case "DATAWAKE":
            campoEmpresaParanoa.style.display = 'none';
    }
}
// Função para alternar o campo adicional com base no tipo de material selecionado
function toggleCampoAdicional(index) {
    const tipoMaterial = document.getElementById(`tipoMaterial${index}`);
    const campoAdicional = document.getElementById(`campoAdicional${index}`);
    const campoExtra = document.getElementById(`campoExtra${index}`);
    const campoAdicional1 = document.getElementById(`campoAdicional1${index}`); 
    const campoExtra1 = document.getElementById(`campoExtra1${index}`);  
    const campoAdicional3 = document.getElementById(`campoAdicional3${index}`); 
    const campoExtra3 = document.getElementById(`campoExtra3${index}`); 
    const campoAdicional4 = document.getElementById(`campoAdicional4${index}`); 
    const campoExtra4 = document.getElementById(`campoExtra4${index}`);
    const campoUtilizacao = document.getElementById(`campoUtilizacao${index}`);
    const campoCondicao = document.getElementById(`campoCondicao${index}`);
    const centroCusto = document.getElementById(`centroCusto${index}`);

    if (tipoMaterial.value === "MN - MATERIAL DE MANUTENÇÃO") {
        centroCusto.value = "12117";
    } else if (tipoMaterial.value === "MP - MATERIA PRIMA") {
        centroCusto.value = "12110";
    } else if (tipoMaterial.value === "MF - MATERIAL DE FERRAMENTARIA") {
        centroCusto.value = "12106";
    } else if (tipoMaterial.value === "GG - EPI'S") {
        centroCusto.value = "12128";
    } else {
        centroCusto.value = "";
    }

    // Desabilitar os centros de custo específicos
    if (tipoMaterial.value === "MP - MATERIA PRIMA" || tipoMaterial.value === "MF - MATERIAL DE FERRAMENTARIA" || tipoMaterial.value === "MN - MATERIAL DE MANUTENÇÃO" || tipoMaterial.value === "MN - MATERIAL DE MANUTENÇÃO" || tipoMaterial.value === "GG - EPI'S") {
        centroCusto.disabled = true;
    } else {
        centroCusto.disabled = false;
    }
    

    // Adicionar ouvinte de evento para manter o valor do centro de custo
    centroCusto.addEventListener('input', function() {
        if (
            centroCusto.value === "12117" ||
            centroCusto.value === "12110" ||
            centroCusto.value === "12106" ||
            centroCusto.value === "12128" ||
            centroCusto.value === "12110"
        ) {
            centroCusto.value = this.defaultValue;
        }
    });

    // Verifica o tipo de material selecionado e exibe os campos adicionais correspondentes
    switch (tipoMaterial.value) {
        case "MC - MATERIAL DE CONSUMO": // MATERIAL DE CONSUMO
            campoAdicional.style.display = 'block'; 
            campoExtra.style.display = 'block';
            campoAdicional1.style.display = 'none'; 
            campoExtra1.style.display = 'none'; 
            campoAdicional3.style.display = 'none'; 
            campoExtra3.style.display = 'none'; 
            campoAdicional4.style.display = 'none'; 
            campoExtra4.style.display = 'none';
            codigoReferencia.style.display = 'none';
            break;
        case "MN - MATERIAL DE MANUTENÇÃO": // MATERIAL DE MANUTENÇÃO
            campoAdicional.style.display = 'none'; 
            campoExtra.style.display = 'none';
            campoAdicional1.style.display = 'block'; 
            campoExtra1.style.display = 'block'; 
            campoAdicional3.style.display = 'none'; 
            campoExtra3.style.display = 'none'; 
            campoAdicional4.style.display = 'none'; 
            campoExtra4.style.display = 'none';
            codigoReferencia.style.display = 'none';
            break;
        case "GG - EPI'S": // EPI'S
            campoAdicional.style.display = 'none'; 
            campoExtra.style.display = 'none';
            campoAdicional1.style.display = 'none'; 
            campoExtra1.style.display = 'none'; 
            campoAdicional3.style.display = 'block'; 
            campoExtra3.style.display = 'block'; 
            campoAdicional4.style.display = 'none'; 
            campoExtra4.style.display = 'none';
            codigoReferencia.style.display = 'none';
            break;
        case "AI -  ATIVO IMOBILIZADO": 
            campoAdicional.style.display = 'none'; 
            campoExtra.style.display = 'none';
            campoAdicional1.style.display = 'none'; 
            campoExtra1.style.display = 'none'; 
            campoAdicional3.style.display = 'none'; 
            campoExtra3.style.display = 'none'; 
            campoAdicional4.style.display = 'block'; 
            campoExtra4.style.display = 'block';
            campoUtilizacao.style.display = 'block'; // Exibe o campo de Utilização
            campoCondicao.style.display = 'block'; // Exibe o campo de Condição
            codigoReferencia.style.display = 'none';
            break;
        default:
            campoAdicional.style.display = 'none'; 
            campoExtra.style.display = 'none';
            campoAdicional1.style.display = 'none'; 
            campoExtra1.style.display = 'none'; 
            campoAdicional3.style.display = 'none'; 
            campoExtra3.style.display = 'none'; 
            campoAdicional4.style.display = 'none'; 
            campoExtra4.style.display = 'none';
            campoUtilizacao.style.display = 'none'; 
            campoCondicao.style.display = 'none'; 
            codigoReferencia.style.display = 'none';
            break;
    }

}

