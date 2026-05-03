import { certificados } from "../data/certificados.js";

export const getCertificados = (req, res) => {
  res.json(certificados);
};

export const getCertificadoById = (req, res) => {
  const { id } = req.params;
  const cert = certificados.find((c) => c.id == id);

  if (!cert) {
    return res.status(404).json({ erro: "Certificado não encontrado" });
  }

  res.json(cert);
};

export const criarCertificado = (req, res) => {
  const { titulo, arquivo } = req.body;

  if (!titulo || !arquivo) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios",
    });
  }

  const novo = {
    id: certificados.length + 1,
    titulo,
    arquivo,
  };

  certificados.push(novo);
  res.status(201).json(novo);
};

export const atualizarCertificado = (req, res) => {
  const { id } = req.params;
  const index = certificados.findIndex((c) => c.id == id);

  if (index === -1) {
    return res.status(404).json({ erro: "Certificado não encontrado" });
  }

  certificados[index] = { ...certificados[index], ...req.body };

  res.json(certificados[index]);
};

export const deletarCertificado = (req, res) => {
  const { id } = req.params;
  const index = certificados.findIndex((c) => c.id == id);

  if (index === -1) {
    return res.status(404).json({ erro: "Certificado não encontrado" });
  }

  certificados.splice(index, 1);

  res.json({ mensagem: "Certificado removido com sucesso" });
};
