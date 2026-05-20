import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const getProjetos = async (req, res) => {
  try {
    const projetos = await prisma.projetos.findMany();
    res.json(projetos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ erro: "Erro ao buscar projetos no banco de dados." });
  }
};

export const getProjetoById = async (req, res) => {
  const { id } = req.params;
  try {
    const projeto = await prisma.projetos.findUnique({
      where: { id: Number(id) },
    });

    if (!projeto) {
      return res.status(404).json({ erro: "Projeto não encontrado" });
    }

    res.json(projeto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar o projeto." });
  }
};

export const criarProjeto = async (req, res) => {
  const { titulo, descricao, link } = req.body;

  if (!titulo || !descricao || !link) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios",
    });
  }

  try {
    const novoProjeto = await prisma.projetos.create({
      data: { titulo, descricao, link },
    });
    res.status(201).json(novoProjeto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar o projeto no banco." });
  }
};

export const atualizarProjeto = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, link } = req.body;

  try {
    const projetoAtualizado = await prisma.projetos.update({
      where: { id: Number(id) },
      data: { titulo, descricao, link },
    });

    res.json(projetoAtualizado);
  } catch (error) {
    console.error(error);
    res.status(404).json({ erro: "Projeto não encontrado para atualizar" });
  }
};

export const deletarProjeto = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.projetos.delete({
      where: { id: Number(id) },
    });

    res.json({ mensagem: "Projeto deletado com sucesso do MySQL" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ erro: "Projeto não encontrado para deletar" });
  }
};
