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
    document.getElementById('loading').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('resultado').classList.remove('hidden');
        document.getElementById('nomeMarca').textContent = marcaInput.value;
        // Preencher resultados...
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
    console.log('Exportando PDF...');
    // Lógica de exportação...
    alert('Relatório exportado com sucesso (simulação).');
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