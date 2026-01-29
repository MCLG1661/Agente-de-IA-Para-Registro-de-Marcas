let currentPlan = 'Básico'; // Plano inicial
const plans = ['Básico', 'Profissional', 'Premium'];

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o estado dos botões de plano
    updatePlanUI();
    populateClassSelect();

    // Adiciona listeners para os botões de upgrade
    document.getElementById('planBtn-Profissional').addEventListener('click', () => {
        iniciarUpgrade('Profissional');
    });

    document.getElementById('planBtn-Premium').addEventListener('click', () => {
        iniciarUpgrade('Premium');
    });
});


/**
 * Altera o plano do usuário entre 'Básico' e 'Premium'.
 * @param {string} newPlan - O novo plano a ser ativado.
 */
function changePlan(newPlan) {
    if (currentPlan === newPlan) {
        console.log(`O plano já é ${newPlan}.`);
        return;
    }

    currentPlan = newPlan;
    console.log(`Plano alterado para: ${currentPlan}`);

    updatePlanUI();
}

/**
 * Atualiza a interface do usuário para refletir o plano atual.
 */
function updatePlanUI() {
    const planNameEl = document.getElementById('planName');
    const appContainer = document.getElementById('app-container');

    if (planNameEl) {
        planNameEl.textContent = currentPlan;
    }

    if (appContainer) {
        // Remove todas as classes de plano existentes
        appContainer.classList.remove('plan-basico', 'plan-profissional', 'plan-premium');
        
        // Adiciona a classe do plano atual
        if (currentPlan === 'Profissional') {
            appContainer.classList.add('plan-profissional');
        } else if (currentPlan === 'Premium') {
            appContainer.classList.add('plan-premium');
        } else {
            appContainer.classList.add('plan-basico');
        }

        // Atualiza o estado dos botões
        plans.forEach(plan => {
            document.getElementById(`planBtn-${plan}`).disabled = (currentPlan === plan);
        });
    }
}

/**
 * Popula o dropdown de classes de Nice.
 */
function populateClassSelect() {
    const classeSelect = document.getElementById('classeSelect');
    if (classeSelect && typeof niceClasses !== 'undefined') {
        niceClasses.forEach(cls => {
            const option = document.createElement('option');
            option.value = cls.id;
            option.textContent = `Classe ${cls.id}: ${cls.description}`;
            classeSelect.appendChild(option);
        });
    }
}

// Funções existentes (simuladas, já que o arquivo original não foi fornecido)
function analisarMarca() {
    const marcaInput = document.getElementById('marcaInput');
    if (!marcaInput.value) {
        alert('Por favor, digite o nome da marca para análise.');
        return;
    }

    if (currentPlan === 'Básico' || currentPlan === 'Profissional') {
        const isPremiumFeature = Math.random() > 0.5; // Simula uma funcionalidade premium
        if (isPremiumFeature) {
            alert('Esta análise avançada requer um plano superior. Por favor, faça o upgrade para continuar.');
            return;
        }
    }

    console.log(`Analisando a marca: ${marcaInput.value} com o plano ${currentPlan}`);
    // Lógica de análise...
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('resultado').classList.remove('hidden');
        document.getElementById('nomeMarca').textContent = marcaInput.value;
        
        // Simulação de Resultados
        const riscos = ['low', 'medium', 'high'];
        // Peso aleatório para o risco
        const riscoAleatorio = riscos[Math.floor(Math.random() * riscos.length)];
        
        const badge = document.getElementById('riskBadge');
        const conflitosList = document.getElementById('conflitosList');
        const sugestoesList = document.getElementById('sugestoesList');
        const proximosPassos = document.getElementById('proximosPassos');

        // Limpar listas anteriores
        conflitosList.innerHTML = '';
        sugestoesList.innerHTML = '';
        proximosPassos.innerHTML = '';

        let dadosResultado;

        if (riscoAleatorio === 'high') {
            badge.className = 'risk-badge risk-high';
            badge.textContent = 'Risco Alto';
            dadosResultado = {
                conflitos: ['Marca foneticamente idêntica encontrada na classe selecionada.', 'Termo descritivo de uso comum.'],
                sugestoes: ['Considere alterar o nome da marca.', 'Adicione um elemento figurativo distintivo.'],
                passos: ['Consultar um advogado especializado.', 'Realizar busca aprofundada de anterioridade.']
            };
        } else if (riscoAleatorio === 'medium') {
            badge.className = 'risk-badge risk-medium';
            badge.textContent = 'Risco Moderado';
            dadosResultado = {
                conflitos: ['Marcas com radical similar em classes correlatas.', 'Possível oposição de terceiros.'],
                sugestoes: ['Monitorar o processo semanalmente.', 'Registrar também a forma mista (logo).'],
                passos: ['Preparar documentação para depósito.', 'Aguardar prazo de oposição.']
            };
        } else {
            badge.className = 'risk-badge risk-low';
            badge.textContent = 'Risco Baixo';
            dadosResultado = {
                conflitos: ['Nenhum conflito direto encontrado na base do INPI.'],
                sugestoes: ['Iniciar o processo de registro imediatamente.', 'Garantir domínios de internet (.com.br).'],
                passos: ['Protocolar pedido no INPI.', 'Pagar a GRU inicial.']
            };
        }

        // Preencher HTML
        const createListItems = (items, container) => {
            items.forEach(item => {
                const p = document.createElement('p');
                p.textContent = `• ${item}`;
                container.appendChild(p);
            });
        };

        createListItems(dadosResultado.conflitos, conflitosList);
        createListItems(dadosResultado.sugestoes, sugestoesList);
        createListItems(dadosResultado.passos, proximosPassos);

    }, 2000);
}

function limparPesquisa() {
    document.getElementById('marcaInput').value = '';
    document.getElementById('classeSelect').value = '';
    document.getElementById('resultado').classList.add('hidden');
    console.log('Pesquisa limpa.');
}

function exportarPDF() {
    if (currentPlan !== 'Premium') {
        alert('A exportação de PDF é uma funcionalidade do plano Premium. Por favor, faça o upgrade.');
        return;
    }
    
    const elemento = document.getElementById('resultado');
    const nomeMarca = document.getElementById('nomeMarca').textContent || 'Relatorio';

    if (window.jspdf && window.html2canvas) {
        window.html2canvas(elemento).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const imgProps = doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            
            doc.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
            doc.save(`Analise_Marca_${nomeMarca}.pdf`);
        });
    } else {
        alert('Erro ao carregar bibliotecas de PDF.');
    }
}

/**
 * Redireciona o usuário para a página de pagamento para fazer o upgrade.
 * @param {string} targetPlan - O plano para o qual o usuário deseja fazer upgrade.
 */
function iniciarUpgrade(targetPlan) {
    console.log(`Iniciando fluxo de upgrade para o plano: ${targetPlan}`);
    window.location.href = `pagamento.html?plan=${targetPlan}`;
}

// Inicializa a UI no carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    populateClassSelect();
    updatePlanUI();
});
