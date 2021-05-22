exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("nacionalidades")
    .del()
    .then(function () {
      // Inserts seed entries
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
