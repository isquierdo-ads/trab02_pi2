exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("clubes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("clubes").insert([
        { nome: "Gremio" },
        { nome: "Inter" },
        { nome: "Flamengo" },
        { nome: "Pelotas" },
        { nome: "Xavante" },
        { nome: "Palmeiras" },
      ]);
    });
};
