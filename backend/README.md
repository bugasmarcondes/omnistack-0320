# backend

- iniciando express com rota get
- instalando e configurando nodemon
- instalando e configurando knex
    - knexjs.org
    1. yarn add knex
    2. yarn add sqlite3
    3. npx knex init
- separando fontes dentro da pasta src
- configurando knexfiles.js
    1. connection filename
    2. migrations
        a. npx knex migrate:make create_ongs
        b. editar arquivo de migração das ongs, com a estrutura das tabelas a ser montada
            - npx knex migrate:latest
        c. npx knex migrate:make create_incidents
        d. editar arquivo de migração dos incidents, executar o comando para executar a migration
            - npx knex migrate:latest
        * npx knex (lista todos os comandos do knex)
    3. useNullAsDefaults
- criar connection.js
- instanciar connection.js no routes.js e utiliza-lo para realizar insert na tabela
    1. foi criada uma rota POST para receber os dados da requisição e inseri-los na tabela
- criação da pasta controller
    1. criação e reestruturação de fontes no arquivo OngController.js
    2. criação do arquivo IncidentController.js e inclusão no routes.js
- instalar CORS
    - yarn add cors
- instalar celebrate para validações
    - yarn add celebrate
- instalar jest para realizar testes
    1. yarn add jest -D
    2. executar na raiz de backend: npx jest --init (yes, node, no, yes)
    3. criar pastas tests na raiz de backend
        - integration (testa por completo uma funcionalidade)
        - unit (testa um pedaço isolado da aplicação, como uma função por exemplo, não se comunica com outros pedaços)
- escrever teste unitário
- escrever teste de integração
    1. criar objeto para banco de testes
    2.a. instalar pacote para descobrir se estamos em ambiente de Dev ou Tests
        - yarn add cross-env
    2.b. alterando estrutura para facilitar trabalhos em base de desenvolvimento e na base de testes
    2.c. ajustando script no package.json
    3. instalar supertest para permitir chamadas a API e verificação de seus retornos
        - yarn add supertest
    3. escrever teste