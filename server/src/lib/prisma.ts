// importação do cliente do prisma
import { PrismaClient } from "@prisma/client";

// inicialização do prisma com parametro de exibição em log das queries realizadas
export const prisma = new PrismaClient({
  log: ["query"],
});
