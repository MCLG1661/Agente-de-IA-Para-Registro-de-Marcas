document.addEventListener('DOMContentLoaded', () => {
    const planNameEl = document.getElementById('plan-name');
    const planPriceEl = document.getElementById('plan-price');
    const confirmBtn = document.getElementById('confirm-action-btn');
    const installmentsSelect = document.getElementById('installments');

    // Define os preços para cada plano
    const prices = {
        'Profissional': { value: 49.90, text: 'R$ 49,90' },
        'Premium': { value: 99.90, text: 'R$ 99,90' }
    };

    // Pega o parâmetro 'plan' da URL
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    const currentPlanData = prices[plan];

    if (currentPlanData) {
        planNameEl.textContent = plan;
        planPriceEl.textContent = currentPlanData.text;
        populateInstallments(currentPlanData.value);
    } else {
        planNameEl.textContent = 'Plano Inválido';
        planPriceEl.textContent = 'N/A';
        confirmBtn.disabled = true;
        confirmBtn.style.backgroundColor = '#ccc';
        return; // Interrompe a execução se o plano for inválido
    }

    // Lógica para alternar entre métodos de pagamento
    const paymentLabels = document.querySelectorAll('.payment-method-label');
    const paymentContents = document.querySelectorAll('.payment-content');

    paymentLabels.forEach(label => {
        label.addEventListener('click', () => {
            // Remove 'active' de todas as abas e conteúdos
            paymentLabels.forEach(l => l.classList.remove('active'));
            paymentContents.forEach(c => c.classList.remove('active'));

            // Adiciona 'active' na aba clicada
            label.classList.add('active');

            // Mostra o conteúdo correspondente e atualiza o botão
            if (label.htmlFor === 'method-cc') {
                document.getElementById('credit-card-content').classList.add('active');
                confirmBtn.textContent = 'Pagar com Cartão';
            } else if (label.htmlFor === 'method-pix') {
                document.getElementById('pix-content').classList.add('active');
                confirmBtn.textContent = 'Gerar QR Code Pix';
            } else if (label.htmlFor === 'method-boleto') {
                document.getElementById('boleto-content').classList.add('active');
                confirmBtn.textContent = 'Gerar Boleto';
            }
        });
    });

    confirmBtn.addEventListener('click', () => {
        // AQUI você integraria com o seu gateway de pagamento (Stripe, PagSeguro, etc.)
        // A lógica pode variar dependendo do método de pagamento ativo.
        const activeMethod = document.querySelector('.payment-method-label.active').textContent;
        alert(`Simulando processamento via ${activeMethod} para o plano ${plan}... Pagamento aprovado!`);

        // Após o sucesso, você poderia redirecionar o usuário de volta para o sistema com o novo plano ativo.
        // window.location.href = `index.html?plan_upgraded=${plan}`;
    });
});

/**
 * Popula as opções de parcelamento com base no valor do plano.
 * @param {number} planValue - O valor numérico do plano.
 */
function populateInstallments(planValue) {
    const select = document.getElementById('installments');
    select.innerHTML = ''; // Limpa opções existentes

    // Adiciona até 6x com juros simples de 5% para simulação
    for (let i = 1; i <= 6; i++) {
        const option = document.createElement('option');
        const totalValue = i > 1 ? planValue * 1.05 : planValue;
        const installmentValue = totalValue / i;
        option.value = i;
        option.textContent = `${i}x de ${installmentValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        select.appendChild(option);
    }
}