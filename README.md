## ®️SMART — Plataforma Inteligente para Análise de Marcas

> Protótipo SaaS demonstrativo para análise inicial de marcas, classificação de risco, exploração das Classes de Nice e simulação de uma jornada digital de contratação.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-Frontend-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white)
![SaaS](https://img.shields.io/badge/Product-SaaS%20Prototype-7952B3)
![UX](https://img.shields.io/badge/UX-Product%20Experience-FF69B4)
![Status](https://img.shields.io/badge/Status-Prototype-orange)

### English overview

SMART is a demonstrative SaaS prototype for exploring the early stages of trademark analysis. It presents illustrative risk scoring, Nice Classification exploration, and a simulated service journey.

---

## 📌 Sobre o Projeto

O **SMART** é um protótipo de produto digital criado para explorar como tecnologia, automação e experiência do usuário podem ser aplicadas à jornada inicial de análise e proteção de marcas.

**SMART — Sistema de Marcas Assistido por Redes de Tecnologia**

A aplicação permite ao usuário:

- informar o nome de uma marca;
- selecionar uma das Classes de Nice;
- executar uma análise demonstrativa;
- receber uma classificação de risco;
- visualizar pontos de atenção;
- receber recomendações;
- consultar próximos passos;
- explorar diferentes planos de produto;
- simular uma jornada de upgrade;
- persistir o plano escolhido no navegador;
- exportar resultados demonstrativos em PDF no plano Premium.

O projeto foi estruturado como um **protótipo SaaS**, combinando desenvolvimento Front-end, regras de negócio, UX, Product Thinking e concepção de uma possível evolução futura com Inteligência Artificial.

---

## ⚠️ Importante

O SMART é um **projeto educacional e demonstrativo**.

A versão atual:

- **não realiza consultas reais ao INPI**;
- **não consulta bases oficiais de marcas**;
- **não fornece parecer jurídico**;
- **não processa pagamentos reais**;
- **não implementa Inteligência Artificial ou NLP nesta versão**.

As classificações e recomendações apresentadas pela aplicação são simuladas para demonstrar a experiência e a lógica de um possível produto digital.

Antes de qualquer pedido real de registro de marca, devem ser consultadas as fontes oficiais aplicáveis e, quando necessário, profissionais especializados.

---

## 🎯 Problema

O processo de registro de uma marca pode envolver diferentes etapas:

```text
Ideia da Marca
      ↓
Definição do Nome
      ↓
Classificação
      ↓
Pesquisa de Anterioridade
      ↓
Avaliação de Risco
      ↓
Decisão
      ↓
Pedido de Registro
      ↓
Acompanhamento
```

Para usuários sem conhecimento especializado, essa jornada pode parecer complexa.

O SMART explora uma pergunta de produto:

> **Como transformar uma jornada técnica e complexa em uma experiência digital mais simples, orientada e compreensível?**

---

## 💡 Proposta de Solução

A proposta conceitual do SMART é criar uma camada digital que organize a jornada inicial do usuário.

```text
Usuário
   ↓
Nome da Marca
   ↓
Classe de Nice
   ↓
Análise Demonstrativa
   ↓
Classificação de Risco
   ↓
Pontos de Atenção
   ↓
Recomendações
   ↓
Próximos Passos
```

A aplicação atual implementa essa experiência como um **protótipo funcional**, permitindo validar conceitos de interface, navegação, regras de negócio e modelo SaaS.

---

# 🧠 Product Thinking

O projeto não foi concebido apenas como uma página Front-end.

Sua estrutura procura simular diferentes componentes de um produto digital:

```text
Problema
   ↓
Usuário
   ↓
Jornada
   ↓
Funcionalidade
   ↓
Regra de Negócio
   ↓
Interface
   ↓
Plano
   ↓
Conversão
   ↓
Retenção
```

Isso permite explorar conceitos relacionados a:

- Product Discovery;
- Product Thinking;
- experiência do usuário;
- modelo SaaS;
- planos de assinatura;
- freemium;
- jornada de upgrade;
- monetização;
- persistência de estado;
- roadmap de produto.

---

# 🔍 Análise Demonstrativa

O usuário informa:

```text
Nome da Marca
      +
Classe de Nice
```

A aplicação gera um **score determinístico demonstrativo**.

Isso significa que a mesma combinação de:

```text
Marca + Classe
```

gera sempre o mesmo resultado dentro da lógica atual.

O score é utilizado para classificar o risco demonstrativo em três níveis:

```text
0 ───────────── 33
      BAIXO

34 ──────────── 66
     MODERADO

67 ──────────── 99
       ALTO
```

Essa lógica substitui uma geração puramente aleatória e torna a experiência reproduzível.

---

# 📊 Classificação de Risco

A aplicação trabalha com três classificações demonstrativas.

### 🟢 Baixo

O hash gera uma classificação ilustrativa baixa, sem pesquisar conflitos reais.

O sistema ainda recomenda pesquisa oficial antes de qualquer decisão.

### 🟡 Moderado

O hash gera uma classificação ilustrativa moderada, sem avaliar características reais.

O usuário recebe recomendações para aprofundar a pesquisa.

### 🔴 Alto

O hash gera uma classificação ilustrativa alta, sem medir similaridade ou consultar uma base de marcas.

A interface recomenda análise mais detalhada antes de qualquer decisão sobre registro.

---

# 🗂️ Classes de Nice

O SMART disponibiliza as **45 Classes de Nice** para seleção dentro da experiência.

As classes organizam produtos e serviços em diferentes categorias.

Exemplo:

```text
Marca:
Prime Performance

Classe:
35 — Publicidade; gestão de negócios comerciais.
```

A classe selecionada participa da geração do score demonstrativo juntamente com o nome da marca.

---

# 💡 Recomendações e Próximos Passos

Depois da análise, a interface apresenta três blocos:

```text
🔎 Pontos de Atenção
        ↓
💡 Recomendações Demonstrativas
        ↓
📋 Próximos Passos
```

A intenção é demonstrar como um produto poderia ir além de simplesmente apresentar um score.

O objetivo da experiência é transformar um resultado em **orientação para uma próxima ação**.

---

# 💳 Modelo SaaS Demonstrativo

O SMART também simula uma estrutura de planos:

| Plano | Papel no Protótipo |
|---|---|
| **Básico** | Entrada na experiência |
| **Profissional** | Demonstração de funcionalidades intermediárias |
| **Premium** | Demonstração de recursos avançados |

A interface permite navegar entre esses níveis por meio de uma jornada de upgrade.

---

# 🔄 Jornada de Upgrade

O fluxo demonstrativo funciona da seguinte forma:

```text
Plano Básico
     ↓
Escolha do Upgrade
     ↓
Profissional / Premium
     ↓
Página de Contratação
     ↓
Método de Pagamento
     ↓
Simulação
     ↓
Confirmação
     ↓
Plano Ativado
     ↓
Retorno ao SMART
```

Nenhuma transação financeira real é realizada.

---

# 💰 Simulação de Pagamento

O protótipo apresenta três métodos:

```text
💳 Cartão
⚡ Pix
📄 Boleto
```

Todos possuem finalidade exclusivamente demonstrativa.

### Cartão

Simula:

- campos ilustrativos de cartão, desativados;
- parcelamento;
- confirmação da contratação.

Nenhum dado é enviado para um gateway.

### Pix

Demonstra como uma futura implementação poderia disponibilizar um QR Code ou código Pix.

### Boleto

Demonstra conceitualmente como um boleto poderia ser integrado ao fluxo.

Nenhum boleto real é emitido.

---

# 💾 Persistência do Plano

Depois da simulação de upgrade, o plano escolhido é armazenado utilizando:

```javascript
localStorage
```

Fluxo:

```text
Usuário escolhe Premium
        ↓
Simula contratação
        ↓
localStorage
        ↓
Retorna ao SMART
        ↓
Plano Premium recuperado
        ↓
Atualização da interface
```

Isso permite que o plano continue ativo mesmo após a atualização da página no mesmo navegador.

---

# 📄 Exportação para PDF

O plano Premium demonstra a exportação do resultado da análise para PDF.

A implementação utiliza:

```text
html2canvas
      +
jsPDF
```

Fluxo:

```text
Resultado da Análise
        ↓
Captura HTML
        ↓
Canvas
        ↓
Imagem
        ↓
jsPDF
        ↓
Relatório PDF
```

O arquivo recebe um nome baseado na marca analisada.

---

# 🛡️ Tratamento de Estados e Validações

A aplicação possui diferentes verificações para evitar comportamentos inconsistentes.

Entre elas:

- validação do nome da marca;
- validação da Classe de Nice;
- validação dos planos disponíveis;
- tratamento de parâmetros inesperados na URL;
- prevenção de duplicação das Classes de Nice;
- persistência segura do plano;
- validação antes da geração do PDF;
- mensagens quando recursos externos não estão disponíveis.

---

# 🧠 Arquitetura Atual

```text
┌──────────────────────────┐
│         Usuário          │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│        index.html        │
│     Interface SMART      │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│        script.js         │
│ Regras + Estado + Fluxo  │
└───────┬──────────┬───────┘
        │          │
        ▼          ▼
┌──────────────┐ ┌──────────────┐
│   data.js    │ │ localStorage │
│ Nice Classes │ │ Plano Atual  │
└──────────────┘ └──────────────┘
        │
        ▼
┌──────────────────────────┐
│    Análise Simulada      │
│ Score + Classificação    │
└──────────────────────────┘

          +

┌──────────────────────────┐
│     pagamento.html       │
│ Jornada de Upgrade SaaS  │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│      pagamento.js        │
│ Simulação de Contratação │
└──────────────────────────┘
```

---

# 🤖 Roadmap de Inteligência Artificial

Embora o nome original do repositório faça referência a um agente de IA, **a versão atual não implementa um modelo de Inteligência Artificial**.

A IA faz parte do roadmap conceitual do produto.

Uma possível evolução poderia utilizar:

```text
Nome da Marca
      ↓
Normalização
      ↓
Pesquisa em Base Oficial
      ↓
NLP / Embeddings
      ↓
Similaridade Semântica
      ↓
Similaridade Fonética
      ↓
Regras de Negócio
      ↓
Classificação de Risco
      ↓
LLM
      ↓
Explicação do Resultado
```

---

## 🧠 Possível Arquitetura Futura com IA

```text
                ┌─────────────────┐
                │     Usuário     │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │    Front-end    │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │   API / Backend │
                └────────┬────────┘
                         │
             ┌───────────┼───────────┐
             │           │           │
             ▼           ▼           ▼
      ┌────────────┐ ┌─────────┐ ┌───────────┐
      │ Base Oficial│ │   NLP   │ │   LLM     │
      └─────┬──────┘ └────┬────┘ └─────┬─────┘
            │             │             │
            └─────────────┼─────────────┘
                          │
                          ▼
                ┌─────────────────┐
                │ Risk Engine     │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │ Recomendações   │
                └─────────────────┘
```

---

# 🚀 Roadmap do Produto

Possíveis evoluções do SMART:

### Dados

- integração com fontes oficiais;
- armazenamento de pesquisas;
- histórico de análises;
- banco de dados;
- monitoramento de marcas.

### Inteligência Artificial

- NLP;
- embeddings;
- busca semântica;
- similaridade fonética;
- LLMs;
- RAG;
- geração de explicações;
- classificação assistida por IA.

### Backend

- API REST;
- autenticação;
- gerenciamento de usuários;
- persistência em banco;
- logging;
- segurança;
- testes automatizados.

### SaaS

- autenticação;
- planos reais;
- gateway de pagamento;
- billing;
- assinatura;
- limites de uso;
- dashboard do cliente.

### Produto

- onboarding;
- histórico;
- notificações;
- acompanhamento;
- métricas de produto;
- analytics;
- testes A/B.

---

# 🛠️ Tecnologias

| Tecnologia | Aplicação |
|---|---|
| **HTML5** | Estrutura da interface |
| **CSS3** | Estilização e experiência visual |
| **JavaScript** | Regras de negócio e interatividade |
| **LocalStorage** | Persistência do plano demonstrativo |
| **jsPDF** | Geração de PDF |
| **html2canvas** | Captura do resultado para exportação |
| **Git** | Controle de versão |
| **GitHub** | Repositório e documentação |
| **Vercel** | Deploy da aplicação |

---

# 📂 Estrutura do Projeto

```text
Agente-de-IA-Para-Registro-de-Marcas/
│
├── index.html
├── style.css
├── script.js
│
├── data.js
│
├── pagamento.html
├── pagamento.css
├── pagamento.js
│
└── README.md
```

---

# ▶️ Executando o Projeto

Por ser uma aplicação Front-end estática, o SMART não exige instalação de dependências para sua execução básica.

## 1. Clone o repositório

```bash
git clone https://github.com/MCLG1661/Agente-de-IA-Para-Registro-de-Marcas.git
```

## 2. Entre no diretório

```bash
cd Agente-de-IA-Para-Registro-de-Marcas
```

## 3. Execute

Abra:

```text
index.html
```

em um navegador moderno.

Também é possível utilizar uma extensão como **Live Server** no VS Code.

---

# 🌐 Aplicação Online

O protótipo está publicado na Vercel:

**SMART — Plataforma Inteligente para Análise de Marcas**

https://agente-especialista-em-registro-de.vercel.app/

---

# 💼 Competências Demonstradas

## Front-end Development

- HTML;
- CSS;
- JavaScript;
- DOM;
- eventos;
- manipulação de estado;
- navegação entre páginas.

## JavaScript

- funções;
- arrays;
- objetos;
- eventos;
- validações;
- `localStorage`;
- `URLSearchParams`;
- manipulação do DOM;
- lógica determinística;
- tratamento de estados.

## Product Thinking

- identificação de problema;
- jornada do usuário;
- definição de funcionalidades;
- estrutura de planos;
- freemium;
- upgrade;
- monetização;
- roadmap.

## UX

- formulários;
- feedback visual;
- classificação de risco;
- recomendações;
- mensagens de segurança;
- navegação;
- estados da aplicação.

## SaaS

- planos;
- pricing demonstrativo;
- upgrade;
- fluxo de pagamento;
- persistência de plano;
- funcionalidades segmentadas.

## Engenharia de Software

- Git;
- GitHub;
- separação de responsabilidades;
- validações;
- documentação;
- deploy.

---

# 📈 Visão de Negócio

O SMART também demonstra como uma ideia pode ser estruturada a partir de diferentes perspectivas:

```text
Necessidade do Usuário
        ↓
Problema de Negócio
        ↓
Proposta de Valor
        ↓
Produto Digital
        ↓
Experiência
        ↓
Tecnologia
        ↓
Modelo SaaS
        ↓
Roadmap
```

Essa abordagem aproxima **negócio, produto e tecnologia**, tratando o código como parte de uma solução e não como objetivo isolado.

---

# ⚖️ Disclaimer

Este projeto possui finalidade exclusivamente **educacional, demonstrativa e de portfólio**.

O SMART:

- não é uma ferramenta oficial do INPI;
- não possui vínculo com o INPI;
- não substitui pesquisa oficial de anterioridade;
- não fornece parecer jurídico;
- não garante disponibilidade ou registrabilidade de marcas;
- não processa pagamentos reais;
- não utiliza Inteligência Artificial na versão atual.

Os resultados apresentados são simulados e não devem ser utilizados para tomada de decisão jurídica ou comercial sobre registro de marcas.

---

# 👨‍💻 Autor

**Marcus Guedes**

Marketing | Data Science | Inteligência Artificial | Gestão de Projetos

**GitHub:** [MCLG1661](https://github.com/MCLG1661)

**LinkedIn:** [Marcus Guedes](https://www.linkedin.com/in/marcusguedes/)

---

## ⭐ Sobre este Projeto

O SMART representa a exploração de uma ideia de produto desde o **problema de negócio até um protótipo funcional**, conectando:

**Product Thinking + UX + JavaScript + SaaS + visão de evolução para Inteligência Artificial.**

---

🚀 **Transformando problemas de negócio em produtos digitais e experiências orientadas por tecnologia.**
