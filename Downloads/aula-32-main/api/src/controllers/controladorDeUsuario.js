const servicoDeUsuario = require("../services/servicoDeUsuario");

exports.obterTodosUsuarios = async (_req, res) => {
  servicoDeUsuario.obterTodosUsuarios((erro, usuarios) => {
    if (erro) {
      return res.status(400).json({ error: erro });
    }
    res.json(usuarios);
  });
};

const servicoDeUsuario = require("../services/servicoDeUsuario");

// Obtém todos os usuários
exports.obterTodosUsuarios = async (_req, res) => {
  servicoDeUsuario.obterTodosUsuarios((erro, usuarios) => {
    if (erro) {
      return res.status(400).json({ error: erro });
    }
    res.json(usuarios);
  });
};

exports.criarUsuario = async (req, res) => {
  const { nome, email, cpf } = req.body;

  
  if (!nome || !email || !cpf) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios!" });
  }

  res.status(201).json({
    mensagem: "Usuário criado com sucesso!",
    usuario: { nome, email, cpf },
  });
};
