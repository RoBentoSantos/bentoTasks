# 🍱 bentoTasks API

Uma API RESTful desenvolvida em Node.js com Express para gerenciamento de tarefas, focada em boas práticas de arquitetura de software, separação de responsabilidades e containerização com Docker.

---

## 📌 Sobre o Projeto

O **bentoTasks** foi desenvolvido com o objetivo de ir além de um CRUD básico, aplicando conceitos sólidos de engenharia de software no ecossistema Node.js:
- **Arquitetura em Camadas (Layered Architecture):** isolamento estrito entre tráfego web, controle de requisição e regra de negócio.
- **ES Modules (`import/export`):** utilização dos padrões modernos de JavaScript.
- **Códigos de Status HTTP Padronizados:** respostas semânticas para cada tipo de operação (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`).
- **Containerização:** ambiente 100% empacotado e reprodutível via Docker.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) (v20+)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)

---

## 🏛️ Arquitetura e Estrutura de Pastas

A aplicação foi estruturada seguindo o padrão **Controller-Service**, dividida da seguinte forma:

- **`src/routes/`**: Mapeamento dos endpoints e verbos HTTP (GET, POST, PUT, DELETE).
- **`src/controllers/`**: Recepção de requisições (`req`), validação de parâmetros de entrada e envio de respostas (`res`).
- **`src/services/`**: Concentração da lógica e regras de negócio pura, independente de protocolo HTTP.

```text
bentotasks/
├── src/
│   ├── index.js               # Inicialização e configuração do Express
│   ├── routes/
│   │   └── tarefaRoutes.js    # Rotas da entidade de tarefas
│   ├── controllers/
│   │   └── tarefaController.js# Tratamento de requisições e respostas
│   └── services/
│       └── tarefasService.js  # Lógica de negócio e dados
├── .dockerignore
├── Dockerfile
├── package.json
└── README.md
```

---
## 🚀 Como Executar o Projeto

Você pode executar o **bentoTasks** de duas formas: utilizando **Docker** (sem precisar de Node instalado na máquina) ou diretamente pelo **Node.js**.

---

### Pré-requisitos
* [Git](https://git-scm.com/) instalado.
* [Docker](https://www.docker.com/) (caso vá rodar via container) **OU** [Node.js](https://nodejs.org/) v20+ e npm.

---

### 1. Clonar o repositório

Abra o terminal e clone o projeto:
```bash
git clone [https://github.com/SEU-USUARIO/bentotasks.git](https://github.com/SEU-USUARIO/bentotasks.git)
cd bentotasks
```
---

### 2. Execute com o Node

Abra o terminal onde o projeto está e cole os comando em ordem:
```bash
npm install

npm start
```

---

### 2. Execute com docker

Abra o terminal onde o projeto está e cole os comando em ordem:
```bash
docker build -t bentotasks .

docker run -p 3000:3000 --name bentotasks-app bentotasks
```