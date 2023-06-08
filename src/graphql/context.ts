import { PrismaClient } from "@prisma/client";
import { prisma } from "../prisma/db";

export type ApolloContext = {
  prisma: PrismaClient;
};

export function createContext(): ApolloContext {
  return {
    prisma,
  };
}
