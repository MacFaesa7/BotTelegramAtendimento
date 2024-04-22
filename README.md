# Anotações importantes :joy:

## Comandos do Git

- git init
- git add .
- git status
- git commit -m "uma mensagem"
- git log
- git push -u origin main
- git pull


- Projeto Prático C1- DEV-II

Uma grande empresa atacadista contatou a equipe de desenvolvedores da turma de Dev Web II para o desenvolvimento de um BOT de atendimento. O BOT, inicialmente, deve funcionar no aplicativo TELEGRAM. Ao receber uma mensagem, o BOT deve avaliar o horário em que a mensagem foi enviada. Se a mensagem foi enviada em horário comercial (09:00 às 18:00), o BOT deve informar para o usuário o link: https://faesa.br.

Se a mensagem foi enviada fora do horário comercial, o BOT deve informar o horário de funcionamento da empresa (09:00 às 18:00) e obter o e-mail do interessado, para que a empresa possa entrar em contato. Este e-mail deve ser armazenado em um banco de dados SQLITE, usando o ORM Prisma.

Você deverá escrever o projeto e enviar o link PÚBLICO de repositório no Github no Blog da disciplina, para avaliação. Instruções quaisquer devem ser relatadas no arquivo README.md do projeto.

- Sites pesquisas:
- https://www.prisma.io/docs/getting-started/quickstart
- https://www.prisma.io/docs/orm/reference/connection-urls
- https://www.npmjs.com/package/typescript
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- https://www.typescriptlang.org/pt/docs/handbook/tsconfig-json.html
- https://www.npmjs.com/package/dotenv#-examples
- 

- echo "# BotTelegramAtendimento" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main


//# Environment variables declared in this file are automatically made available to Prisma.
//# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

//# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
//# See the documentation for all the connection string options: https://pris.ly/d/connection-strings