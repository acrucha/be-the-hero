///TABELA DOS CASOS
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
      table.increments();//cria uma crave primaria e dps cria sozinho as proximas
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable();//fazendo a ponte com a ong que reportou o caso

      table.foreign('ong_id').references('id').inTable('ongs');// para checar se o id da ong do caso existe na tabela de ONGs
    });//chave primária
  };
  //usar para criar a tabela: 'npx knex migrate:latest' no terminal
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');//função chamada caso eu decida apagar minha tabela  
  };
  