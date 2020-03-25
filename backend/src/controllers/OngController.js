/* Pacote do node para o id */
const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  async index (request, response){
    //Selecione todos
  const ongs = await connection('ongs').select('*');

  return response.json(ongs);
  },



  async create(request, response){
    const {name, email, whatsapp, city, uf} = request.body;
  
  /* Para criar o id */
  const id = crypto.randomBytes(4).toString('HEX');

  /* Colocamos a coluna que queremos*/
  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  })

  return response.json({ id });
  }


};