# 🧪 QA Umbrella – Automação de Testes com Cypress

Projeto iniciante de **automação de testes E2E** utilizando **Cypress**, desenvolvido com o objetivo de praticar conceitos básicos de Quality Assurance e testes automatizados em aplicações web.

---

## 📌 Objetivo do Projeto

Este pequeno projeto tem como finalidade:

- Praticar automação de testes End-to-End
- Aplicar boas práticas iniciais em testes automatizados
- Utilizar Cypress integrado ao Visual Studio Code
- Versionar código utilizando Git e GitHub

---

## 🛠️ Tecnologias Utilizadas

- **Cypress**
- **JavaScript**
- **Node.js**
- **Visual Studio Code**
- **Git & GitHub**

---

## 🧩 Cenários Automatizados

Atualmente o projeto contempla o seguinte cenário:

### 🔐 Login e Logout – SauceDemo

- Acessar a página de login
- Validar a presença da tela inicial
- Realizar login com usuário padrão
- Validar login realizado com sucesso
- Executar logout
- Validar retorno à tela de login

Site utilizado para testes:  
🔗 https://www.saucedemo.com/

---

## 📂 Estrutura do Projeto

```text
qa_umbrella_automacao/
├── cypress/
│   ├── e2e/
│   │   └── auth.swag.cy.js
│   ├── fixtures/
│   └── support/
├── node_modules/
├── cypress.config.js
├── package-lock.jason
├── package.json
└── README.md
```
