import express from "express";
import cors from "cors";

import projetosRoutes from "../routes/projetos.routes.js";
import certificadosRoutes from "../routes/certificados.routes.js";
import skillsRouter from "../routes/skills.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/projetos", projetosRoutes);
app.use("/certificados", certificadosRoutes);
app.use("/skills", skillsRouter);

export default app;
