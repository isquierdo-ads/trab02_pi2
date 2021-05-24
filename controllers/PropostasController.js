const knex = require("../database/dbConfig");

module.exports = {
  async index(req, res) {
    const propostas = await knex
      .select("p.id", "p.comprador", "p.proposta", "j.nome as jogadores")
      .from("propostas as p")
      .leftJoin("jogadores as j", "p.id", "j.id")
      .orderBy("p.id", "desc");

    res.status(200).json(propostas);
  },

  async store(req, res) {
    const { comprador, proposta, jogador_id } = req.body;

    if (!comprador || !proposta || !jogador_id) {
      res.status(400).json({ erro: "Dados inválidos" });
      return;
    }

    try {
      const novaProposta = await knex("propostas").insert({
        comprador,
        proposta,
        jogador_id,
      });
      res.status(201).json({ id: novaProposta[0] });
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },
};
