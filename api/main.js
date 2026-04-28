import express from "express";
import cors from "cors";

const app = express();
const port = 2000;

app.use(express.json());
app.use(cors());

let projetos = [
  {
    id: 1,
    titulo: "Projeto API",
    descricao: "Super projeto API em grupo...",
    link: "https://github.com/guilhermefpo/CodeWave",
  },
  {
    id: 2,
    titulo: "Audiobook",
    descricao: "Passos no React.js",
    link: "https://github.com/guilhermefpo/Audiobook.",
  },
  {
    id: 3,
    titulo: "Petshop",
    descricao: "Simulando um site de Petshop em Next.js.",
    link: "https://github.com/guilhermefpo/Petshop",
  },
];

app.get("/projetos", (req, res) => {
  res.json(projetos);
});

app.post("/projetos", (req, res) => {
  const novoProjeto = req.body;
  novoProjeto.id = projetos.length + 1;
  projetos.push(novoProjeto);
  res.status(201).json(novoProjeto);
});

app.put("/projetos/:id", (req, res) => {
  const { id } = req.params;
  const index = projetos.findIndex((p) => p.id == id);
  if (index !== -1) {
    projetos[index] = { ...projetos[index], ...req.body };
    res.json(projetos[index]);
  } else {
    res.status(404).send("Projeto não encontrado");
  }
});

app.delete("/projetos/:id", (req, res) => {
  const { id } = req.params;
  projetos = projetos.filter((p) => p.id != id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
