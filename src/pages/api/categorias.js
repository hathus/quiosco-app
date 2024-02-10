import { PrismaClient } from '@prisma/client';

// Función que retorna las categorías
export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const categorias = await prisma.categoria.findMany()
  res.status(200).json(categorias)
}
