// DENTRO DE: src/routes/skills.routes.js

import { Router } from "express";
import {
  getSkills,
  getSkillById,
  criarSkill,
  atualizarSkill,
  deletarSkill,
} from "../controllers/skills.controller.js";

const router = Router();

router.get("/", getSkills);
router.get("/:id", getSkillById);
router.post("/", criarSkill);
router.put("/:id", atualizarSkill);
router.delete("/:id", deletarSkill);

export default router;
