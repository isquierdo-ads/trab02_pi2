const knex = require("../database/dbConfig");

module.exports = {
  async index(req, res) {
    const jogadores = await knex
      .select("salario", knex.raw("COUNT(salario)"))
      .from("jogadores")
      .groupByRaw("salario WITH ROLLUP");

    let media = 0;
    let numJogadores = 0;
    for (i = 0; i < jogadores.length - 1; i++) {
      const o = jogadores[i];
      media = media + Number(Object.values(o)[0]) * Number(Object.values(o)[1]);
      numJogadores = numJogadores + Number(Object.values(o)[1]);
    }
    media = Math.floor(media / numJogadores);

    //res.status(200).json(jogadores);
    res
      .status(200)
      .json({
        ok: 1,
        msg: `A média salarial dos jogadores é de R$ ${media.toFixed(2)} reais`,
      });
  },
};
