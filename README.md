# 🚀 Projeto Qik-Menu

Bem-vindo ao projeto Qik-menu criado com React e Vite! Este guia vai te ajudar a configurar e rodar o projeto rapidamente.

## 🚨 ATENÇÃO

Foram utilizados os endpoints para o fetch dos dados, baseado na url: 
```bash
https://cdn-dev.preoday.com/challenge
```
Porém, a política de CORS configurada na API não permite requisições de diferentes domínios, então foi necessário a configuração
de um proxy para o servidor de desenvolvimento, que não se aplica ao deploy realizado.

Para o deploy, utilizei um mock de dados baseado no retorno da API, mas caso queira avaliar o fetch, basta executar o servidor de
desenvolvimento seguindo os passos a seguir, alterando o .env:
```bash
VITE_AMBIENT=development
```

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## 🔧 Instalação do Vite

Se você já possui o Vite instalado globalmente, pode pular esta etapa. Caso contrário, siga as instruções abaixo para instalar:

```bash
npm install -g create-vite
```
## 📦 Como rodar o projeto
### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

O servidor de desenvolvimento será iniciado e você verá uma mensagem indicando em qual URL o projeto está sendo servido. Normalmente, é http://localhost:5173.

## 🛠️ Scripts Disponíveis
No diretório do projeto, você pode rodar os seguintes scripts:
### 1 - Roda a aplicação em modo de desenvolvimento:
```bash
npm run dev
```
### 2 - Compila o projeto para produção:
```bash
npm run build
```
### 3 - Serve a versão de produção do build:
```bash
npm run preview
```

## 📂 Estrutura do Projeto
Aqui está uma visão geral da estrutura do projeto:

```bash
├── public
│  
├── src
│   ├── app
│       ├── App.jsx
│   ├── assets
│   ├── components
│   ├── config
│   ├── features
│   ├── hooks
│   ├── pages
│   ├── redux
│   ├── routes
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```
## Autor
### Lucas Pereira Melo
