const connection = require('../database/connection')

module.exports ={
  async create(request, response){
    //Pegar o ID -> Do corpo
    const { id } = request.body; 

    //buscar a ong no banco de dados
    const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

    if(!ong){
      return response.status(400).json({ error: 'No ONG found with this ID'})
    }

    return response.json(ong);
  }
}