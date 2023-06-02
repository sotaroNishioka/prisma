-- enable uuid extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateEnum
CREATE TYPE "book_status" AS ENUM ('FAVORITE', 'IN_PROGRESS', 'DONE', 'DELETED');

-- CreateEnum
CREATE TYPE "card_status" AS ENUM ('FAVORITE', 'IN_PROGRESS', 'DONE', 'DELETED');

-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('NOT_AUTHENTICATED', 'AUTHENTICATED');

-- CreateTable
CREATE TABLE "book" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "status" "book_status" NOT NULL DEFAULT 'IN_PROGRESS',
    "userId" TEXT NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "status" "card_status" NOT NULL DEFAULT 'IN_PROGRESS',
    "eng" VARCHAR(255) NOT NULL,
    "ja" VARCHAR(255) NOT NULL,
    "memo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "status" "user_status" NOT NULL DEFAULT 'NOT_AUTHENTICATED',
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
