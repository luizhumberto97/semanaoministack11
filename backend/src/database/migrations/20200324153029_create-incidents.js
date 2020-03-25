
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
     
    /*  ARMAZENAR A ONG QUE CRIOU ESSE INCIDENTE -> RELACIONAMENTO */
    table.string('ong_id').notNullable();

    /* criar chave estrangeira -> toda vez que a ong id for preenchido precisa ser id que esteja
    cadastrado na tabela ong */
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
