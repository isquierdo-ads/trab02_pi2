exports.up = (knex) => {
  return knex.schema.createTable("jogadores", (table) => {
    table.increments();
    table.string("nome", 45).notNullable();
    table.string("foto").notNullable();
    table.integer("idade", 2).notNullable();
    table.decimal("salario", 9.2).notNullable();
    table.boolean("destaque").notNullable().defaultTo(false);

    // cria campo de relacionamento com a tabela marcas
    table.integer("clube_id").notNullable().unsigned();
    table
      .foreign("clube_id")
      .references("clubes.id")
      .onDelete("restrict")
      .onUpdate("cascade");

    table.integer("nacionalidade_id").notNullable().unsigned();
    table
      .foreign("nacionalidade_id")
      .references("nacionalidades.id")
      .onDelete("restrict")
      .onUpdate("cascade");

    // cria os campos created_at e updated_at
    table.timestamps(true, true);
  });
};

exports.down = (knex) => knex.schema.dropTable("jogadores");
