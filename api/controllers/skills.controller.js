import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const getSkills = async (req, res) => {
  try {
    const skills = await prisma.skills.findMany();
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar skills no banco de dados." });
  }
};

export const getSkillById = async (req, res) => {
  const { id } = req.params;
  try {
    const skill = await prisma.skills.findUnique({
      where: { id: Number(id) },
    });

    if (!skill) {
      return res.status(404).json({ erro: "Skill não encontrada" });
    }

    res.json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar a skill." });
  }
};

export const criarSkill = async (req, res) => {
  const { name, icon } = req.body;

  if (!name || !icon) {
    return res.status(400).json({
      erro: "Todos os campos (name e icon) são obrigatórios",
    });
  }

  try {
    const novaSkill = await prisma.skills.create({
      data: {
        name_: name,
        icon: icon,
      },
    });
    res.status(201).json(novaSkill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar a skill no banco." });
  }
};

export const atualizarSkill = async (req, res) => {
  const { id } = req.params;
  const { name, icon } = req.body;

  try {
    const dadosAtualizados = {};
    if (name) dadosAtualizados.name_ = name;
    if (icon) dadosAtualizados.icon = icon;

    const skillAtualizada = await prisma.skills.update({
      where: { id: Number(id) },
      data: dadosAtualizados,
    });

    res.json(skillAtualizada);
  } catch (error) {
    console.error(error);
    res.status(404).json({ erro: "Skill não encontrada para atualizar" });
  }
};

export const deletarSkill = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.skills.delete({
      where: { id: Number(id) },
    });

    res.json({ mensagem: "Skill deletada com sucesso do MySQL" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ erro: "Skill não encontrada para deletar" });
  }
};
