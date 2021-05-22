const knex = require("../database/dbConfig");

module.exports = {
  async index(req, res) {
    const destaques = await knex("jogadores")
      .where({ destaque: true })
      .select("nome");
    res.status(200).json(destaques);
  },
};
