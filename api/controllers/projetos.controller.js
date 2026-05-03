import { projetos } from "../data/projetos.js";

export const getProjetos = (req, res) => {
  res.json(projetos);
};

export const getProjetoById = (req, res) => {
  const { id } = req.params;
  const projeto = projetos.find((p) => p.id == id);

  if (!projeto) {
    return res.status(404).json({ erro: "Projeto não encontrado" });
  }

  res.json(projeto);
};

export const criarProjeto = (req, res) => {
  const { titulo, descricao, link } = req.body;

  if (!titulo || !descricao || !link) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios",
    });
  }

  const novo = {
    id: projetos.length + 1,
    titulo,
    descricao,
    link,
  };

  projetos.push(novo);
  res.status(201).json(novo);
};

export const atualizarProjeto = (req, res) => {
  const { id } = req.params;
  const index = projetos.findIndex((p) => p.id == id);

  if (index === -1) {
    return res.status(404).json({ erro: "Projeto não encontrado" });
  }

  projetos[index] = { ...projetos[index], ...req.body };

  res.json(projetos[index]);
};

export const deletarProjeto = (req, res) => {
  const { id } = req.params;
  const index = projetos.findIndex((p) => p.id == id);

  if (index === -1) {
    return res.status(404).json({ erro: "Projeto não encontrado" });
  }

  projetos.splice(index, 1);

  res.json({ mensagem: "Projeto deletado com sucesso" });
};
