const express = require("express");
const DestaquesController = require("./controllers/DestaquesController");
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

routes.get("/destaques", DestaquesController.index);

module.exports = routes;
