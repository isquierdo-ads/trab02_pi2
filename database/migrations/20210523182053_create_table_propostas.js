exports.up = (knex) => {
  return knex.schema.createTable("propostas", (table) => {
    table.increments();
    table.string("comprador", 45).notNullable();
    table.decimal("proposta", 9.2).notNullable();

    table.integer("jogador_id").notNullable().unsigned();
    table.foreign("jogador_id").references("jogadores.id").onUpdate("cascade");

    table.timestamps(true, true);
  });
};

exports.down = (knex) => knex.schema.dropTable("jogadores");
