const express = require("express");
const DestaquesController = require("./controllers/DestaquesController");
const FiltroController = require("./controllers/FiltroController");
const DadosEstatisticosController = require("./controllers/DadosEstatisticosController");
const routes = express.Router();

const JogadoresController = require("./controllers/JogadoresController");
const UsuariosController = require("./controllers/UsuariosController");
const login = require("./middleware/login");

routes
  .get("/jogadores", login, JogadoresController.index)
  .post("/jogadores", JogadoresController.store);

routes
  .get("/usuarios", UsuariosController.index)
  .post("/usuarios", UsuariosController.store)
  .post("/login", UsuariosController.login);

routes
  .get("/destaques", DestaquesController.index)
  .put("/update/:id", DestaquesController.update);

routes.get("/filtro/:palavra", FiltroController.index);

routes.get("/estatistica", DadosEstatisticosController.index);

module.exports = routes;
