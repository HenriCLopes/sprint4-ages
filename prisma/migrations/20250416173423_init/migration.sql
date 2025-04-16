/*
  Warnings:

  - Added the required column `level` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "level" INTEGER NOT NULL,
ADD COLUMN     "profile_img" TEXT;

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "acessLevel" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);
