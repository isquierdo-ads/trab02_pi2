exports.seed = function (knex) {
  return knex("propostas")
    .del()
    .then(function () {
      return knex("propostas").insert([
        { comprador: "Vasco", proposta: 3000, jogador_id: 1 },
        { comprador: "Palmeiras", proposta: 3200, jogador_id: 2 },
        { comprador: "Boca", proposta: 4000, jogador_id: 3 },
      ]);
    });
};
