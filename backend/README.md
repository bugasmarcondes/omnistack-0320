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