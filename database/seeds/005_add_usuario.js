exports.seed = function (knex) {
  return knex("propostas")
    .del()
    .then(function () {
      return knex("propostas").insert([
        { nome: "Joao", email: "joao@gmail.com", senha: "joao123" },
      ]);
    });
};
