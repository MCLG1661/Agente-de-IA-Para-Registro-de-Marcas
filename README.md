# ®️ SMART (Sistema de Marcas Assistido Por Redes de Tecnologia Artificial) — Plataforma Inteligente para Análise de Marcas

*Protótipo SaaS para análise de viabilidade e apoio ao processo de registro de marcas*

![HTML5](https://img.shields.io/badge/HTML5-Frontend-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![jsPDF](https://img.shields.io/badge/jsPDF-PDF%20Export-red)
![SaaS](https://img.shields.io/badge/Product-SaaS-7952B3)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)
![Status](https://img.shields.io/badge/Status-Protótipo-blue)

**SMART — Sistema de Marcas Assistido por Redes de Tecnologia Artificial** é um 
protótipo de aplicação web desenvolvido para explorar como tecnologia, automação 
e experiência digital podem apoiar processos relacionados à análise de marcas.

A solução permite simular a avaliação inicial de um nome de marca, apresentar 
possíveis conflitos e organizar informações em um relatório de viabilidade.

O projeto também explora um modelo conceitual de produto **SaaS (Software as a Service)**, 
com diferentes planos e funcionalidades.

> ⚠️ O SMART é um protótipo demonstrativo. As consultas, análises e recomendações 
> apresentadas pela aplicação são simuladas e não substituem pesquisas oficiais, 
> análises especializadas ou orientação jurídica.

---

## 🌐 Aplicação Online

**[Acesse o SMART](https://agente-especialista-em-registro-de.vercel.app/)**

A versão demonstrativa do SMART está publicada na **Vercel** e pode ser acessada diretamente pelo navegador.

--- 

## 💼 Problema

O processo de criação e registro de uma marca envolve diferentes etapas de 
pesquisa e avaliação.

Antes de iniciar um pedido de registro, empresas e empreendedores podem precisar 
organizar informações relacionadas a :

- Nome pretendido
- Classe de produtos ou serviços
- Possíveis marcas semelhantes
- Potenciais conflitos
- Nível de risco
- Próximos passos

O SMART foi concebido para explorar como uma experiência digital poderia 
centralizar essas informações e facilitar uma análise inicial.

---

## 🎯 Objetivo

Criar um protótipo de produto digital capaz de demonstrar uma experiência 
simplificada de análise de marcas.

O projeto combina :

**Product Thinking + Automação + UX + Desenvolvimento Web + Modelo SaaS**

---

## ✨ Funcionalidades Demonstradas

🔎 Análise de Viabilidade

O usuário informa o nome pretendido para a marca e seleciona uma classe de 
produtos ou serviços para iniciar uma análise demonstrativa.

🔤 Análise de Similaridade

A aplicação simula a identificação de possíveis similaridades e conflitos entre 
o nome pesquisado e marcas existentes na base demonstrativa.

📊 Classificação de Risco

O resultado é apresentado utilizando diferentes níveis de risco para facilitar 
a interpretação das informações.

📄 Relatório

A aplicação organiza os resultados da análise em um relatório contendo:

- Classificação de risco
- Possíveis conflitos
- Informações da análise
- Recomendações demonstrativas
- Próximos passos

📥 Exportação para PDF

O relatório pode ser exportado em PDF utilizando **jsPDF** e **html2canvas**.

---

## 💳 Modelo SaaS

O projeto também explora conceitualmente uma estratégia de produto baseada em 
diferentes níveis de serviço.

Básico

Experiência inicial de análise e geração de relatório.

Profissional

Conceito de funcionalidades adicionais, como integração com fontes externas e 
monitoramento.

Premium

Conceito de funcionalidades avançadas e integrações.

> Alguns recursos apresentados nos planos fazem parte da visão de produto e são 
> simulados na versão atual.

---

## 🔄 Fluxo da Aplicação

````text
Usuário
   ↓
Nome da Marca
   ↓
Seleção da Classe
   ↓
Análise Demonstrativa
   ↓
Comparação com Base Simulada
   ↓
Identificação de Similaridades
   ↓
Classificação de Risco
   ↓
Relatório
   ↓
Recomendações
   ↓
Exportação PDF

````

---

## 🏗️ Arquitetura Atual

                ┌─────────────────┐
                │     Usuário     │
                └────────┬────────┘
                         ↓
                ┌─────────────────┐
                │    Interface    │
                │ HTML / CSS / JS │
                └────────┬────────┘
                         ↓
                ┌─────────────────┐
                │    data.js      │
                │ Base simulada   │
                └────────┬────────┘
                         ↓
                ┌─────────────────┐
                │ Lógica de       │
                │ análise         │
                └────────┬────────┘
                         ↓
                ┌─────────────────┐
                │   Relatório     │
                └────────┬────────┘
                         ↓
                ┌─────────────────┐
                │ jsPDF / Canvas  │
                └─────────────────┘

---

## 🛠️ Tecnologias

**HTML5** - Estrutura da interface 
**CSS3** - Design e responsividade 
**JavaScript** - Lógica e interatividade
**data.js** - Dados utilizados na simulação
**jsPDF** - Geração do relatório em PDF
**html2canvas** - Captura da interface para exportação
**Vercel** - Deploy da aplicação

---

## 📂 Estrutura do Projeto

```text
Agente-de-IA-Para-Registro-de-Marcas/
│
├── index.html
├── style.css
├── script.js
├── data.js
│
├── pagamento.html
├── pagamento.css
├── pagamento.js
│
└── README.md

```
---

## 💡 Competências Demonstradas

- JavaScript
- HTML5
- CSS3
- Desenvolvimento Front-end
- Responsive Web Design
- Manipulação do DOM
- Product Thinking
- UX/UI
- Modelagem conceitual SaaS
- Geração de relatórios
- Exportação para PDF
- Prototipação de produtos digitais
- Deploy com Vercel
- Git e GitHub

---

## 🚀 Roadmap

Uma evolução futura do SMART poderia transformar o protótipo em uma aplicação 
com integrações e processamento reais.

Possibilidades:

- Backend estruturado
- Banco de dados
- Autenticação
- Gestão de usuários
- Persistência das pesquisas
- Integração com fontes oficiais disponíveis
- Busca textual avançada
- Algoritmos de similaridade
- NLP para comparação semântica
- APIs
- Histórico de pesquisas
- Dashboard
- Monitoramento de processos

---

## 🤖 Evolução para Inteligência Artificial

Uma futura camada de IA poderia ser utilizada para apoiar tarefas como:

```text
Nome / Marca
     ↓
Processamento de Texto
     ↓
NLP
     ↓
Similaridade Fonética
     ↓
Similaridade Semântica
     ↓
Identificação de Padrões
     ↓
Organização dos Resultados
     ↓
Apoio à Análise

```
Essa arquitetura representa uma **possível evolução do projeto** e não a 
implementação existente na versão atual.

---

## ⚠️ Escopo e Limitações

O SMART é um **protótipo tecnológico e demonstrativo**.

A versão atual utiliza lógica Front-end e dados de demonstração para simular 
funcionalidades de uma possível plataforma de análise de marcas.

O sistema :

- Não realiza pesquisa oficial de registro de marcas
- Não possui conexão real com o INPI na versão atual
- Não oferece parecer jurídico
- Não garante disponibilidade ou possibilidade de registro
- Não substitui pesquisa oficial ou análise profissional

O objetivo do projeto é demonstrar conceitos relacionados a **desenvolvimento web, 
automação, UX, Product Thinking e prototipação de uma solução SaaS**.

---

## 🤝 Como Contribuir

Contribuições e sugestões são bem-vindas para a evolução técnica do **SMART**.

Possíveis áreas de contribuição :

- Algoritmos de similaridade textual
- NLP
- Melhorias de UX/UI
- Backend
- APIs
- Banco de dados
- Testes automatizados
- Acessibilidade
- Segurança
- Arquitetura SaaS

Para contribuir :

1. Faça um Fork do projeto
2. Crie uma branch para sua funcionalidade
3. Implemente e teste as alterações
4. Faça o commit
5. Envie sua branch
6. Abra um Pull Request descrevendo a melhoria realizada

---

## 👨‍💻 Autor

**Marcus Guedes**

Marketing | Data Science | Inteligência Artificial | Gestão de Projetos

GitHub: MCLG1661  
LinkedIn: Marcus Guedes

---

®️ **SMART — Tecnologia aplicada à transformação de processos em experiências digitais.**



