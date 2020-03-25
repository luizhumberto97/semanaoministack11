const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Cors
app.use(cors());

/* Informar que irá utilizar JSON */
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query: Parâmetros nomeados enviados na rota após "?" serve para (Filtros, Paginação)
   * Route Params: Parâmetros utilizados para identificar recursos -> id
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsofot SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    * 
    */

    /**
     * Driver: SELECT * FROM users  -> Buscar todos os dados do user
     * Query Builder: table('users').select('*').where()   -> Na tabela do usuario quero selecionar todos os campos
     */



app.listen(3333);

