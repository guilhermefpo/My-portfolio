import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const getCertificados = async (req, res) => {
  try {
    const certificados = await prisma.certificados.findMany();
    res.json(certificados);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ erro: "Erro ao buscar certificados no banco de dados." });
  }
};

export const getCertificadoById = async (req, res) => {
  const { id } = req.params;
  try {
    const cert = await prisma.certificados.findUnique({
      where: { id: Number(id) },
    });

    if (!cert) {
      return res.status(404).json({ erro: "Certificado não encontrado" });
    }

    res.json(cert);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar o certificado." });
  }
};

export const criarCertificado = async (req, res) => {
  const { titulo, arquivo } = req.body;

  if (!titulo || !arquivo) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios",
    });
  }

  try {
    const novoCertificado = await prisma.certificados.create({
      data: { titulo, arquivo },
    });
    res.status(201).json(novoCertificado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar o certificado no banco." });
  }
};

export const atualizarCertificado = async (req, res) => {
  const { id } = req.params;
  const { titulo, arquivo } = req.body;

  try {
    const certificadoAtualizado = await prisma.certificados.update({
      where: { id: Number(id) },
      data: { titulo, arquivo },
    });

    res.json(certificadoAtualizado);
  } catch (error) {
    console.error(error);
    res.status(404).json({ erro: "Certificado não encontrado para atualizar" });
  }
};

export const deletarCertificado = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.certificados.delete({
      where: { id: Number(id) },
    });

    res.json({ mensagem: "Certificado removido com sucesso do MySQL" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ erro: "Certificado não encontrado para deletar" });
  }
};
