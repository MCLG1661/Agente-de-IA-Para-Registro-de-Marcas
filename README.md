# Agente IA para Registro de Marcas

**SAMARTA (Sistema Avançado de Marcas Assistido Por Redes de Tecnologia Artificial)** é uma aplicação web front-end que simula uma ferramenta inteligente para análise de viabilidade de registro de marcas. O sistema permite que os usuários verifiquem o nome de uma marca em potencial, identifiquem possíveis conflitos e recebam recomendações estratégicas, tudo em uma interface intuitiva e organizada por planos de serviço.



## ✨ Funcionalidades Principais

O projeto foi estruturado para oferecer diferentes níveis de funcionalidades, simulando um modelo de negócio SaaS (Software as a Service) com três planos: Básico, Profissional e Premium.

### Plano Básico (Funcionalidades Gratuitas)
- **Análise de Viabilidade**: Insira o nome da marca e selecione a classe de produto/serviço para iniciar a análise.
- **Busca Inteligente**: Simula a busca em bancos de dados nacionais e internacionais.
- **Análise de Similaridade**: Detecta conflitos fonéticos e semânticos.
- **Relatório de Viabilidade**: Apresenta um relatório com classificação de risco (Baixo, Médio, Alto), conflitos encontrados, recomendações e próximos passos.
- **Exportação para PDF**: Permite exportar o relatório de análise para um arquivo PDF.
- **Gestão de Prazos**: Alertas inteligentes para renovações e respostas.

### Plano Profissional (Recursos Adicionais)
- **Conexão Direta com INPI**: Simula uma busca em tempo real na base de dados oficial do Instituto Nacional da Propriedade Industrial.
- **Monitoramento Contínuo**: Simula o envio de notificações sobre novas marcas conflitantes que sejam publicadas.

### Plano Premium (Recursos Avançados)
- **Relatórios Jurídicos**: Capacidade de gerar pareceres com fundamentação jurídica para decisões estratégicas.
- **Integração via API**: Simula a possibilidade de conectar o poder do agente a sistemas externos.

## 🛠️ Tecnologias Utilizadas

Este projeto é construído exclusivamente com tecnologias front-end:

- **HTML5**: Estrutura e semântica do conteúdo.
- **CSS3**: Estilização e design responsivo (`style.css`).
- **JavaScript (Vanilla)**: Lógica da aplicação, manipulação do DOM e interatividade (`script.js`).
- **jsPDF**: Biblioteca para gerar e exportar o relatório de análise em formato PDF.
- **html2canvas**: Biblioteca utilizada para capturar o conteúdo da página como uma imagem, que é então inserida no PDF.

## 📂 Estrutura do Projeto

├── index.html      # Arquivo principal da aplicação (a interface do usuário)
├── style.css       # Folha de estilos para a aplicação
├── script.js       # Lógica principal da aplicação em JavaScript
└── data.js         # Arquivo com os dados das classes de Nice
