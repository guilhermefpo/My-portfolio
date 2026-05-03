import { Router } from "express";
import {
  getCertificados,
  getCertificadoById,
  criarCertificado,
  atualizarCertificado,
  deletarCertificado,
} from "../controllers/certificados.controller.js";

const router = Router();

router.get("/", getCertificados);
router.get("/:id", getCertificadoById);
router.post("/", criarCertificado);
router.put("/:id", atualizarCertificado);
router.delete("/:id", deletarCertificado);

export default router;
