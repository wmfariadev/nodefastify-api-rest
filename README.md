# API Rest em Node.js com TypeScript, Fastify, Prisma e Postgres

Este projeto é uma API Restful desenvolvida em Node.js utilizando TypeScript como linguagem de programação. O framework Fastify foi utilizado para a construção do servidor, enquanto o Prisma é utilizado como ORM para interagir com o banco de dados Postgres. Além disso, a validação dos objetos recebidos nas requisições é feita utilizando a biblioteca Zod.

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório.
3. Execute `npm install` para instalar as dependências do projeto.

## Execução

Para efetuar a `migration` do banco de dados, execute o seguinte comando:

```bash
npx prisma migrate dev
```

Para iniciar o servidor, execute o seguinte comando:

```bash
npm run dev
```

A API será iniciada e estará acessível em `http://localhost:8080`.

## Endpoints

### Listar todos os livros

- Método: `GET`
- Rota: `/books`
- Descrição: Retorna uma lista com todos os livros cadastrados.

### Listar um único livro

- Método: `GET`
- Rota: `/books/:bookId`
- Descrição: Retorna os detalhes de um único livro com base no ID fornecido.

### Salvar um livro

- Método: `POST`
- Rota: `/books`
- Descrição: Salva um novo livro no banco de dados.
- Parâmetros do corpo da requisição:
  - `title` (string): Título do livro.
  - `author` (string): Autor do livro.
  - `description` (string): Descrição do livro.

### Deletar um livro

- Método: `DELETE`
- Rota: `/books/:bookId`
- Descrição: Deleta um livro do banco de dados com base no ID fornecido.

### Atualizar um livro

- Método: `PATCH`
- Rota: `/books/:bookId`
- Descrição: Atualiza os detalhes de um único livro com base no ID fornecido.
- Parâmetros do corpo da requisição (opcionais):
  - `isReading` (boolean): Indica se o livro está sendo lido.
  - `isFavorite` (boolean): Indica se o livro é favorito.
  - `isFinished` (boolean): Indica se o livro foi concluído.

## Estrutura de Pastas
```
├── prisma/
├── src/
│   ├── http/
│   │   ├── lib/
│   │   └── routes/
├── server.ts
├── .env
├── .gitignore
├── package.json
└── tsconfig.json
```

**Desenvolvido por [William Faria](https://github.com/wmfariadev)**
