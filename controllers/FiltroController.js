const knex = require("../database/dbConfig");

module.exports = {
  async index(req, res) {
    const palavra = req.params.palavra;

    const filtro = await knex("jogadores")
      .select(
        "j.id",
        "j.nome",
        "j.idade",
        "n.nome as nacionalidade",
        "c.nome as clube",
        "j.salario",
        "j.foto",
        "j.destaque"
      )
      .from("jogadores as j")
      .leftJoin("clubes as c", "j.clube_id", "c.id")
      .leftJoin("nacionalidades as n", "j.nacionalidade_id", "n.id")
      .orderBy("j.id", "desc")
      .where("j.nome", "like", `%${palavra}%`)
      .orWhere("j.idade", "like", `%${palavra}%`)
      .orWhere("c.nome", "like", `%${palavra}%`)
      .orWhere("n.nome", "like", `%${palavra}%`)
      .orWhere("j.salario", "like", `%${palavra}%`);

    if (filtro.length <= 0) {
      res
        .status(200)
        .json({ ok: 0, msg: `Não existem dados com essa palavra` });
    } else {
      res.status(200).json(filtro);
    }
  },
};
