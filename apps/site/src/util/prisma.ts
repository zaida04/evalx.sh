import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
if (!prisma) {
  prisma = new PrismaClient();
}

export { prisma };