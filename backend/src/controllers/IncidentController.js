const connection = require('../database/connection')

module.exports = {
  async index(request, response){
    //Paginação -> ex -> http://localhost:3333/incidents?page=2
    const {page = 1} = request.query;

    /*
    Quantidade de caso
    */
    //Para pegar a primeira posição só colocar o [] dentro do count
    const [count] = await connection('incidents').count()
    console.log(count)
    
    const incidents = await connection('incidents') // 5 registro por pagina
    .join('ongs', 'ongs.id', '=' ,'incidents.ong_id') //Relacionar dados com as duas tabelas
    .limit(5)
    .offset((page - 1) * 5)
    .select('incidents.*', 
    'ongs.name', 
    'ongs.email', 
    'ongs.whatsapp',
     'ongs.city',
     'ongs.uf'
    );

    response.header('X-Total-Count', count['count(*)']);
    
    return response.json(incidents);
  },

  

  async create(request, response){
    const { title, description, value} = request.body;
    
    // Pegar o id -> authorization foi o nome que demos no insomnia
    const ong_id = request.headers.authorization;
    
    //Inserir o dado com ->
    //Primeiro valor desse array será a chave Id
    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  },

  async delete(request, response){
    const {id} = request.params;
    //Buscar o id da ong -> para verificar se o incident que quer deletar é da ong que fez mesmo
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
    .where('id', id) //id é igual id
    .select('ong_id') // Selecionar a coluna ong_id
    .first();        //Retornar apenas um resultado

    //Se o ong_id desse incident que buscou no BD , for diferente do ong_id que está logado na nossa aplicação
    if(incident.ong_id !== ong_id){
      return response.status(401).json({error: 'Operation not permitted.'})
    }
    
    //Passando pelo if, vai deletar
    await connection('incidents').where('id', id).delete();

    //Send é resposta vazia
    return response.status(204).send();
  }
};