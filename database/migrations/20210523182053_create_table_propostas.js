exports.up = (knex) => {
  return knex.schema.createTable("propostas", (table) => {
    table.increments();
    table.string("comprador", 45).notNullable();
    table.decimal("proposta", 9.2).notNullable();

    // cria campo de relacionamento com a tabela marcas
    table.integer("jogador_id").notNullable().unsigned();
    table.foreign("jogador_id").references("jogador.id").onUpdate("cascade");

    // cria os campos created_at e updated_at
    table.timestamps(true, true);
  });
};

exports.down = (knex) => knex.schema.dropTable("jogadores");
