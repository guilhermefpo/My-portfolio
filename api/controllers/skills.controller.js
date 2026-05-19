import { skills } from "../data/skills.js";

export const getSkills = (req, res) => {
  res.json(skills);
};

export const getSkillById = (req, res) => {
  const { id } = req.params;
  const skill = skills.find((s) => s.id == id);

  if (!skill) {
    return res.status(404).json({ erro: "Skill não encontrada" });
  }

  res.json(skill);
};

export const criarSkill = (req, res) => {
  const { name, icon } = req.body;

  if (!name || !icon) {
    return res.status(400).json({
      erro: "Todos os campos (name e icon) são obrigatórios",
    });
  }

  const novaSkill = {
    id: skills.length > 0 ? skills[skills.length - 1].id + 1 : 1,
    name,
    icon,
  };

  skills.push(novaSkill);
  res.status(201).json(novaSkill);
};

export const atualizarSkill = (req, res) => {
  const { id } = req.params;
  const index = skills.findIndex((s) => s.id == id);

  if (index === -1) {
    return res.status(404).json({ erro: "Skill não encontrada" });
  }

  skills[index] = { ...skills[index], ...req.body };

  res.json(skills[index]);
};

export const deletarSkill = (req, res) => {
  const { id } = req.params;
  const index = skills.findIndex((s) => s.id == id);

  if (index === -1) {
    return res.status(404).json({ erro: "Skill não encontrada" });
  }

  skills.splice(index, 1);

  res.json({ mensagem: "Skill deletada com sucesso" });
};
