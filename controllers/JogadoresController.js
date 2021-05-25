const knex = require("../database/dbConfig");

module.exports = {
  async index(req, res) {
    const jogadores = await knex
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
      .orderBy("j.id", "desc");

    res.status(200).json(jogadores);
  },

  async store(req, res) {
    const { nome, foto, idade, salario, clube_id, nacionalidade_id, destaque } =
      req.body;

    if (
      !nome ||
      !foto ||
      !idade ||
      !salario ||
      !clube_id ||
      !nacionalidade_id
    ) {
      res.status(400).json({ erro: "Dados inválidos" });
      return;
    }

    try {
      const novoJogador = await knex("jogadores").insert({
        nome,
        foto,
        idade,
        salario,
        clube_id,
        nacionalidade_id,
        destaque,
      });
      res.status(201).json({ id: novoJogador[0] });
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const deleteHandler = await knex("jogadores").where("id", id).del();

      if (!deleteHandler) {
        throw new Error(`Não existe jogador com id ${id}`);
      }
      res.send(`Jogador deletado com sucesso!`);
    } catch (e) {
      res.status(400).json({ ok: 0, msg: `Erro ao deletar: ${e.message}` });
    }
  },
};
