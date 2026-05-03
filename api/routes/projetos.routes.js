import { Router } from "express";
import {
  getProjetos,
  getProjetoById,
  criarProjeto,
  atualizarProjeto,
  deletarProjeto,
} from "../controllers/projetos.controller.js";

const router = Router();

router.get("/", getProjetos);
router.get("/:id", getProjetoById);
router.post("/", criarProjeto);
router.put("/:id", atualizarProjeto);
router.delete("/:id", deletarProjeto);

export default router;
