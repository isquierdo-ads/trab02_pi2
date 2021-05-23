const knex = require("../database/dbConfig");

module.exports = {
  async index(req, res) {
    const destaques = await knex("jogadores")
      .where({ destaque: true })
      .select("nome");
    res.status(200).json(destaques);
  },

  async update(req, res) {
    const id = req.params.id;
    const { destaque } = req.body;

    const destaques = await knex("jogadores")
      .where("id", id)
      .select("destaque");

    if (destaques[0] != undefined) {
      if (destaques[0].destaque == 0) {
        try {
          await knex("jogadores").where("id", id).update({ destaque: true });
          res.send(`Usuário com id ${id} virou destaque`);
        } catch (e) {
          res
            .status(400)
            .json({ ok: 0, msg: `Erro na atualização: ${e.message}` });
        }
      } else if (destaques[0].destaque == 1) {
        try {
          await knex("jogadores").where("id", id).update({ destaque: false });
          res.send(`Removido o destaque do usuário com id ${id}`);
        } catch (e) {
          res
            .status(400)
            .json({ ok: 0, msg: `Erro na atualização: ${e.message}` });
        }
      }
    } else{
      res.status(400).json({ ok: 0, msg: `Id inválido` });
    }
  },
};
