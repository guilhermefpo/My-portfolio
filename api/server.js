import app from "./src/app.js";

const port = 2000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
