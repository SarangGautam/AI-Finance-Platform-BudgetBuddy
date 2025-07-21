import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// globalThis.prisma : this golobal variable ensure that the Prisma Client instance is reused across hot reloads during devlopment. Without this, each time your application reloads, a new instance of the prisma client would be created, potentially leading to connection issues.