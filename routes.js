const express = require("express");
const DestaquesController = require("./controllers/DestaquesController");
const FiltroController = require("./controllers/FiltroController");
const DadosEstatisticosController = require("./controllers/DadosEstatisticosController");
const routes = express.Router();

const JogadoresController = require("./controllers/JogadoresController");
const UsuariosController = require("./controllers/UsuariosController");
const login = require("./middleware/login");
const PropostasController = require("./controllers/PropostasController");

routes
  .get("/jogadores", login, JogadoresController.index)
  .post("/jogadores", JogadoresController.store)

  .get("/usuarios", UsuariosController.index)
  .post("/usuarios", UsuariosController.store)
  .post("/login", UsuariosController.login)

  .get("/destaques", DestaquesController.index)
  .put("/update/:id", DestaquesController.update)

  .get("/filtro/:palavra", FiltroController.index)

  .get("/estatistica", DadosEstatisticosController.index)

  .get("/propostas", PropostasController.index)
  .post("/propostas", PropostasController.store);

module.exports = routes;
