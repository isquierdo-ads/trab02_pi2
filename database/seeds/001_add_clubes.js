exports.seed = function (knex) {
  return knex("clubes")
    .del()
    .then(function () {
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
