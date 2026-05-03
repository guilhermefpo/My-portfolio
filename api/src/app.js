import express from "express";
import cors from "cors";

import projetosRoutes from "./routes/projetos.routes.js";
import certificadosRoutes from "./routes/certificados.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/projetos", projetosRoutes);
app.use("/certificados", certificadosRoutes);

export default app;
