const express = require("express");
const controladorDeUsuario = require("./controllers/controladorDeUsuario");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Olá mundo!");
});

app.get("/usuarios", controladorDeUsuario.obterTodosUsuarios);

app.post("/usuarios", controladorDeUsuario.criarUsuario);

app.listen(3000, () => console.log("Servidor rodando!"));
