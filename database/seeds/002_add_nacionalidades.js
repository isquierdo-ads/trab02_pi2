exports.seed = function (knex) {
  return knex("nacionalidades")
    .del()
    .then(function () {
      return knex("nacionalidades").insert([
        { nome: "Brasileiro" },
        { nome: "Indiano" },
        { nome: "Americano" },
        { nome: "Espanhol" },
        { nome: "Portugues" },
        { nome: "Jamaicano" },
      ]);
    });
};
