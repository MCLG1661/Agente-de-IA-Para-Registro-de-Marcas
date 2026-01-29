document.addEventListener('DOMContentLoaded', () => {
    // Recuperar parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan') || 'Profissional';

    // Definir preços
    const prices = {
        'Básico': 'Grátis',
        'Profissional': 'R$ 99,90',
        'Premium': 'R$ 199,90'
    };

    // Atualizar resumo do pedido
    document.getElementById('plan-name').textContent = plan;
    document.getElementById('plan-price').textContent = prices[plan] || 'R$ 0,00';

    // Gerenciar abas de pagamento
    const methodLabels = document.querySelectorAll('.payment-method-label');
    const contents = document.querySelectorAll('.payment-content');

    methodLabels.forEach(label => {
        label.addEventListener('click', () => {
            // Remove active de todos
            methodLabels.forEach(l => l.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Adiciona active ao clicado
            label.classList.add('active');
            
            // Mostra o conteúdo correspondente
            const methodId = label.getAttribute('for').replace('method-', '');
            const contentId = `${methodId === 'cc' ? 'credit-card' : methodId}-content`;
            document.getElementById(contentId).classList.add('active');

            // Atualiza texto do botão
            const btn = document.getElementById('confirm-action-btn');
            if (methodId === 'pix') btn.textContent = 'Gerar QR Code Pix';
            else if (methodId === 'boleto') btn.textContent = 'Gerar Boleto';
            else btn.textContent = 'Pagar com Cartão';
        });
    });

    // Popular parcelas
    const selectInstallments = document.getElementById('installments');
    if (selectInstallments && prices[plan] !== 'Grátis') {
        const priceValue = parseFloat(prices[plan].replace('R$ ', '').replace(',', '.'));
        selectInstallments.innerHTML = '';
        for (let i = 1; i <= 12; i++) {
            const value = (priceValue / i).toFixed(2).replace('.', ',');
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${i}x de R$ ${value} ${i === 1 ? '(à vista)' : ''}`;
            selectInstallments.appendChild(option);
        }
    }

    // Botão de confirmação (Simulação)
    document.getElementById('confirm-action-btn').addEventListener('click', () => {
        alert('Pagamento processado com sucesso! Seu plano será ativado em instantes.');
        // Redirecionar de volta simulando login/ativação
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
});
