# Tripleten web_project_around_express

Sprint 15 — Introdução ao Express.js — Projeto: Sprint 15 — Renato Falchi Correia de Oliveira

Este projeto dá início ao back-end do Around The U.S. Nesta sprint foi criada, do zero, uma API REST com Node.js e Express, responsável por servir os dados de usuários e cartões a partir de arquivos JSON locais. O foco foi entender a estrutura de um servidor, a organização de rotas em módulos, o tratamento de erros com status HTTP e a leitura de arquivos com os módulos nativos `fs` e `path`.

## 2️⃣ — Objetivo do projeto

Criar a primeira versão da API do projeto, com foco em:

- Configurar um servidor Express na porta `3000`, com `app.js` como ponto de entrada
- Padronizar o código com ESLint (guia de estilo Airbnb), incluindo exceções para `_id`, `console.log` e quebras de linha
- Configurar a recarga automática do servidor em desenvolvimento com `nodemon`
- Criar rotas para listar usuários, listar cartões e buscar um usuário por ID
- Retornar respostas de erro padronizadas em JSON (404 e 500)
- Ler os dados dos arquivos JSON com `fs.readFile()` e montar os caminhos com `path.join()`

Observação: os arquivos JSON são uma solução temporária. Eles serão substituídos por um banco de dados na próxima sprint, e o front-end ainda não está conectado a esta API.

## 3️⃣ — Funcionalidades implementadas

### 🌐 Servidor (app.js)

- Servidor Express iniciado na porta `3000` (ou na porta definida na variável de ambiente `PORT`)
- Roteadores de `/users` e `/cards` registrados com `app.use()`
- Middleware final que responde `404` com `{ "message": "A solicitação não foi encontrada" }` para qualquer endereço inexistente, incluindo `localhost:3000/`

### 👤 Rotas de usuários (routes/users.js)

- `GET /users` retorna a lista de todos os usuários
- `GET /users/:id` retorna o usuário com o ID informado
- Se o ID não existir, responde `404` com `{ "message": "ID do usuário não encontrado" }`

### 🃏 Rotas de cartões (routes/cards.js)

- `GET /cards` retorna a lista de todos os cartões

### 📁 Dados (data/)

- `users.json` e `cards.json` com os dados fornecidos pelo curso
- Leitura feita com `fs.readFile()` e conversão com `JSON.parse()`
- Caminhos montados com `path.join()` e `__dirname`, para funcionar em qualquer sistema operacional
- Em caso de falha na leitura, a API responde `500` com uma mensagem de erro em JSON

### 🧹 Qualidade de código

- ESLint com `airbnb-base`
- Regra `no-underscore-dangle` ajustada para permitir `_id`
- Regra `no-console` desativada
- Regra `linebreak-style` desativada, para evitar conflito entre CRLF (Windows) e LF (Unix)

### 🔁 Hot reload

- `nodemon` reinicia o servidor automaticamente a cada alteração nos arquivos do projeto

## 4️⃣ — Tecnologias utilizadas

- **Node.js** Ambiente de execução do JavaScript no servidor.
- **Express** Framework para criação do servidor, das rotas e dos middlewares.
- **JavaScript (ES6+)** Lógica das rotas, callbacks e manipulação de dados.
- **Módulos nativos fs e path** Leitura de arquivos e construção segura de caminhos.
- **ESLint (Airbnb)** Padronização e verificação de qualidade do código.
- **Nodemon** Recarga automática do servidor durante o desenvolvimento.
- **Git e GitHub** Controle de versão e hospedagem do código.

## 5️⃣ — Estrutura do projeto

```
web_project_around_express/
├── app.js
├── package.json
├── .eslintrc.js
├── data/
│   ├── users.json
│   └── cards.json
└── routes/
    ├── users.js
    └── cards.js
```

## 6️⃣ — Como executar

1. Clone o repositório e entre na pasta do projeto
2. Instale as dependências:

```
npm install
```

3. Inicie o servidor:

```
npm run start
```

4. Para desenvolvimento, com recarga automática:

```
npm run dev
```

O servidor ficará disponível em `http://localhost:3000`.

## 7️⃣ — Endpoints

| Método | Endereço | Resposta | Erro |
|---|---|---|---|
| GET | `/users` | Lista de todos os usuários | — |
| GET | `/cards` | Lista de todos os cartões | — |
| GET | `/users/:id` | Usuário com o ID informado | `404` — `{ "message": "ID do usuário não encontrado" }` |
| GET | Qualquer outro endereço | — | `404` — `{ "message": "A solicitação não foi encontrada" }` |
