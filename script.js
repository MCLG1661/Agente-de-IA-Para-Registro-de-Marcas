// ==========================================================
// SMART
// Sistema de Marcas Assistido por Redes de Tecnologia Artificial
// Protótipo demonstrativo para análise inicial de marcas
// ==========================================================


// ----------------------------------------------------------
// CONFIGURAÇÃO DOS PLANOS
// ----------------------------------------------------------

const plans = ["Básico", "Profissional", "Premium"];

let pendingAnalysis = null;
const savedPlan = localStorage.getItem("smart-demo-plan");

let currentPlan = savedPlan && plans.includes(savedPlan)
    ? savedPlan
    : "Básico";

// ----------------------------------------------------------
// INICIALIZAÇÃO DA APLICAÇÃO
// ----------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    populateClassSelect();
    configurePlanButtons();
    updatePlanUI();
});


// ----------------------------------------------------------
// CONFIGURAÇÃO DOS BOTÕES DE PLANOS
// ----------------------------------------------------------

function configurePlanButtons() {
    const basicButton = document.getElementById("planBtn-Básico");
    const professionalButton = document.getElementById("planBtn-Profissional");
    const premiumButton = document.getElementById("planBtn-Premium");

    if (basicButton) {
        basicButton.addEventListener("click", () => {
            changePlan("Básico");
        });
    }

    if (professionalButton) {
        professionalButton.addEventListener("click", () => {
            iniciarUpgrade("Profissional");
        });
    }

    if (premiumButton) {
        premiumButton.addEventListener("click", () => {
            iniciarUpgrade("Premium");
        });
    }
}


// ----------------------------------------------------------
// ALTERAÇÃO DO PLANO
// ----------------------------------------------------------

function changePlan(newPlan) {
    if (!plans.includes(newPlan)) {
        console.warn(`Plano inválido: ${newPlan}`);
        return;
    }

    currentPlan = newPlan;
    localStorage.setItem("smart-demo-plan", newPlan);

    console.log(`Plano demonstrativo selecionado: ${currentPlan}`);

    updatePlanUI();
}


// ----------------------------------------------------------
// ATUALIZAÇÃO DA INTERFACE DO PLANO
// ----------------------------------------------------------

function updatePlanUI() {
    const planNameEl = document.getElementById("planName");
    const appContainer = document.getElementById("app-container");

    if (planNameEl) {
        planNameEl.textContent = currentPlan;
    }

    if (!appContainer) {
        return;
    }

    appContainer.classList.remove(
        "plan-basico",
        "plan-profissional",
        "plan-premium"
    );

    if (currentPlan === "Profissional") {
        appContainer.classList.add("plan-profissional");
    } else if (currentPlan === "Premium") {
        appContainer.classList.add("plan-premium");
    } else {
        appContainer.classList.add("plan-basico");
    }

    plans.forEach((plan) => {
        const button = document.getElementById(`planBtn-${plan}`);

        if (button) {
            button.disabled = currentPlan === plan;
        }
    });
}


// ----------------------------------------------------------
// CLASSES DE NICE
// ----------------------------------------------------------

function populateClassSelect() {
    const classeSelect = document.getElementById("classeSelect");

    if (!classeSelect || typeof niceClasses === "undefined") {
        return;
    }

    // Evita duplicação das opções caso a função seja executada novamente.
    classeSelect.innerHTML =
        '<option value="">Selecione a classe de produtos/serviços...</option>';

    niceClasses.forEach((cls) => {
        const option = document.createElement("option");

        option.value = cls.id;
        option.textContent = `Classe ${cls.id}: ${cls.description}`;

        classeSelect.appendChild(option);
    });
}


// ----------------------------------------------------------
// GERAÇÃO DETERMINÍSTICA DE SCORE DEMONSTRATIVO
// ----------------------------------------------------------

function gerarScoreDemonstrativo(nomeMarca, classe) {
    const texto = `${nomeMarca.toLowerCase().trim()}-${classe}`;

    let hash = 0;

    for (let i = 0; i < texto.length; i++) {
        hash = (hash * 31 + texto.charCodeAt(i)) >>> 0;
    }

    return hash % 100;
}


// ----------------------------------------------------------
// CLASSIFICAÇÃO DO RISCO
// ----------------------------------------------------------

function classificarRisco(score) {
    if (score >= 67) {
        return "high";
    }

    if (score >= 34) {
        return "medium";
    }

    return "low";
}


// ----------------------------------------------------------
// ANÁLISE DEMONSTRATIVA
// ----------------------------------------------------------

function analisarMarca() {
    const marcaInput = document.getElementById("marcaInput");
    const classeSelect = document.getElementById("classeSelect");

    const nomeMarca = marcaInput.value.trim();
    const classe = classeSelect.value;

    if (!nomeMarca) {
        alert("Digite o nome da marca para iniciar a análise demonstrativa.");
        marcaInput.focus();
        return;
    }

    if (!classe) {
        alert("Selecione uma classe de produtos ou serviços.");
        classeSelect.focus();
        return;
    }

    const resultado = document.getElementById("resultado");
    const loading = document.getElementById("loading");

    resultado.classList.add("hidden");
    loading.classList.remove("hidden");

    console.log(
        `Executando análise demonstrativa da marca "${nomeMarca}" na classe ${classe}.`
    );

    clearTimeout(pendingAnalysis);
    pendingAnalysis = setTimeout(() => {
        pendingAnalysis = null;
        loading.classList.add("hidden");

        executarAnaliseDemonstrativa(
            nomeMarca,
            classe
        );

        resultado.classList.remove("hidden");
    }, 900);
}


// ----------------------------------------------------------
// EXECUÇÃO DA SIMULAÇÃO
// ----------------------------------------------------------

function executarAnaliseDemonstrativa(nomeMarca, classe) {
    const score = gerarScoreDemonstrativo(
        nomeMarca,
        classe
    );

    const risco = classificarRisco(score);

    const nomeMarcaElement = document.getElementById("nomeMarca");
    const badge = document.getElementById("riskBadge");
    const conflitosList = document.getElementById("conflitosList");
    const sugestoesList = document.getElementById("sugestoesList");
    const proximosPassos = document.getElementById("proximosPassos");

    nomeMarcaElement.textContent = nomeMarca;

    conflitosList.innerHTML = "";
    sugestoesList.innerHTML = "";
    proximosPassos.innerHTML = "";

    let dadosResultado;

    if (risco === "high") {
        badge.className = "risk-badge risk-high";
        badge.textContent = "Risco Demonstrativo: Alto";

        dadosResultado = {
            conflitos: [
                "O hash gerou uma classificação ilustrativa alta; nenhuma base de marcas foi consultada.",
                "A classificação não avalia características reais do nome."
            ],

            sugestoes: [
                "Avaliar variações mais distintivas para o nome pretendido.",
                "Realizar pesquisa oficial antes de qualquer decisão sobre registro."
            ],

            passos: [
                "Consultar as ferramentas oficiais disponíveis para pesquisa de marcas.",
                "Considerar orientação profissional especializada antes do depósito."
            ]
        };

    } else if (risco === "medium") {
        badge.className = "risk-badge risk-medium";
        badge.textContent = "Risco Demonstrativo: Moderado";

        dadosResultado = {
            conflitos: [
                "O hash gerou uma classificação ilustrativa moderada; nenhuma similaridade foi medida.",
                "O resultado não permite concluir sobre a disponibilidade da marca."
            ],

            sugestoes: [
                "Pesquisar grafias, radicais e expressões semelhantes.",
                "Verificar marcas relacionadas à classe selecionada."
            ],

            passos: [
                "Realizar pesquisa oficial de anterioridade.",
                "Avaliar os resultados antes de iniciar eventual pedido de registro."
            ]
        };

    } else {
        badge.className = "risk-badge risk-low";
        badge.textContent = "Risco Demonstrativo: Baixo";

        dadosResultado = {
            conflitos: [
                "O hash gerou uma classificação ilustrativa baixa; conflitos reais não foram pesquisados."
            ],

            sugestoes: [
                "Mesmo com risco demonstrativo baixo, realize pesquisa oficial de anterioridade.",
                "Avalie também aspectos nominativos, figurativos e mercadológicos da marca."
            ],

            passos: [
                "Consultar as fontes oficiais aplicáveis.",
                "Confirmar a estratégia de proteção antes de eventual pedido de registro."
            ]
        };
    }

    preencherLista(
        dadosResultado.conflitos,
        conflitosList
    );

    preencherLista(
        dadosResultado.sugestoes,
        sugestoesList
    );

    preencherLista(
        dadosResultado.passos,
        proximosPassos
    );
}


// ----------------------------------------------------------
// PREENCHIMENTO DAS LISTAS
// ----------------------------------------------------------

function preencherLista(items, container) {
    items.forEach((item) => {
        const paragraph = document.createElement("p");

        paragraph.textContent = `• ${item}`;

        container.appendChild(paragraph);
    });
}


// ----------------------------------------------------------
// LIMPAR PESQUISA
// ----------------------------------------------------------

function limparPesquisa() {
    clearTimeout(pendingAnalysis);
    pendingAnalysis = null;
    const marcaInput = document.getElementById("marcaInput");
    const classeSelect = document.getElementById("classeSelect");
    const resultado = document.getElementById("resultado");
    const loading = document.getElementById("loading");

    marcaInput.value = "";
    classeSelect.value = "";

    resultado.classList.add("hidden");
    loading.classList.add("hidden");

    marcaInput.focus();
}


// ----------------------------------------------------------
// EXPORTAÇÃO PARA PDF
// ----------------------------------------------------------

function exportarPDF() {
    if (currentPlan !== "Premium") {
        alert(
            "A exportação para PDF representa uma funcionalidade Premium no protótipo SMART."
        );
        return;
    }

    const elemento = document.getElementById("resultado");

    const nomeMarca =
        document.getElementById("nomeMarca").textContent.trim() ||
        "Relatorio";

    if (!elemento || elemento.classList.contains("hidden")) {
        alert("Execute uma análise antes de gerar o relatório.");
        return;
    }

    if (!window.jspdf || !window.html2canvas) {
        alert(
            "Não foi possível carregar os recursos necessários para gerar o PDF."
        );
        return;
    }

    window.html2canvas(elemento).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const { jsPDF } = window.jspdf;

        const doc = new jsPDF();

        const imgProps = doc.getImageProperties(imgData);

        const pdfWidth =
            doc.internal.pageSize.getWidth();

        const margin = 10;

        const availableWidth =
            pdfWidth - margin * 2;

        const pdfHeight =
            (imgProps.height * availableWidth) /
            imgProps.width;

        doc.addImage(
            imgData,
            "PNG",
            margin,
            margin,
            availableWidth,
            pdfHeight
        );

        const nomeArquivo = nomeMarca
            .replace(/[^\wÀ-ÿ-]+/g, "_")
            .replace(/_+/g, "_");

        doc.save(
            `SMART_Analise_Demonstrativa_${nomeArquivo}.pdf`
        );
    });
}


// ----------------------------------------------------------
// FLUXO DE UPGRADE DEMONSTRATIVO
// ----------------------------------------------------------

function iniciarUpgrade(targetPlan) {
    if (!plans.includes(targetPlan)) {
        alert("Plano inválido.");
        return;
    }

    if (targetPlan === "Básico") {
        changePlan("Básico");
        return;
    }

    console.log(
        `Abrindo demonstração de upgrade para o plano ${targetPlan}.`
    );

    window.location.href =
        `pagamento.html?plan=${encodeURIComponent(targetPlan)}`;
}
